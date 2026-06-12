"use client";

import { useEffect, useState } from "react";
import { ref, onValue, set, update } from "firebase/database";
import { db } from "../../../lib/firebase";

interface SiteConfig {
  siteTitle: string;
  siteDescription: string;
}

export default function AdminConfigPage() {
  const [config, setConfig] = useState<SiteConfig>({
    siteTitle: "",
    siteDescription: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Load config from Firebase Realtime Database – guard against `db` being null during
  // static generation (server‑side rendering). If `db` is unavailable, we simply skip the
  // fetch and allow the page to render with empty defaults.
  useEffect(() => {
    if (!db) {
      // Firebase is not initialized (e.g., during static export). Mark loading as done.
      setLoading(false);
      return;
    }
    const configRef = ref(db, "config");
    const unsubscribe = onValue(
      configRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setConfig({
            siteTitle: data.siteTitle ?? "",
            siteDescription: data.siteDescription ?? "",
          });
        }
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );
    return () => unsubscribe();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setMessage(null);
    if (!db) {
      setError("Firebase is not initialized – cannot save configuration.");
      setSaving(false);
      return;
    }
    try {
      // Use set to overwrite the config node
      await set(ref(db, "config"), config);
      setMessage("Configuration saved successfully.");
    } catch (err: any) {
      setError(err.message || "Failed to save configuration.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Site Configuration</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {message && <p className="text-green-600 mb-2">{message}</p>}
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="siteTitle">
            Site Title
          </label>
          <input
            id="siteTitle"
            name="siteTitle"
            type="text"
            value={config.siteTitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="siteDescription">
            Site Description
          </label>
          <textarea
            id="siteDescription"
            name="siteDescription"
            value={config.siteDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Configuration"}
        </button>
      </form>
    </div>
  );
}
