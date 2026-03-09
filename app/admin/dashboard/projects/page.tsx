/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  location: string;
  desc: string;
  image: string;
}

export default function ProjectsDashboard() {
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const CLOUD_NAME = "dti7sei2q";

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "gag_portfolio");
      formData.append("folder", "gag/projects");

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      if (!data.secure_url) {
        alert("Image upload failed");
        return;
      }

      setImage(data.secure_url);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const createOrUpdateProject = async () => {
    if (!title || !location || !desc) {
      alert("Fill all fields");
      return;
    }

    if (!image) {
      alert("Upload image first");
      return;
    }

    setSaving(true);

    if (editingId) {
      await fetch(`/api/projects/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, location, desc, image }),
      });
    } else {
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, location, desc, image }),
      });
    }

    resetForm();
    await fetchProjects();
    setSaving(false);
  };

  const deleteProject = async (id: string) => {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

    await fetch(`/api/projects/${id}`, { method: "DELETE" });

    fetchProjects();
  };

  const editProject = (project: Project) => {
    setEditingId(project._id);
    setTitle(project.title);
    setLocation(project.location);
    setDesc(project.desc);
    setImage(project.image);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setLocation("");
    setDesc("");
    setImage("");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-10">
      ```
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-[#E0B973]">
          Projects Dashboard
        </h1>

        <button
          onClick={logout}
          className="text-red-400 border border-red-400 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      {/* PROJECT FORM */}
      <div className="bg-[#111] border border-[#222] p-8 rounded-xl mb-12 max-w-xl space-y-4">
        <input
          className="w-full p-3 bg-[#1a1a1a] rounded"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 bg-[#1a1a1a] rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          className="w-full p-3 bg-[#1a1a1a] rounded"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        {/* IMAGE UPLOAD */}

        <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
          <p className="text-gray-400 mb-3">Upload project image</p>

          <input
            type="file"
            onChange={(e) => {
              if (!e.target.files) return;
              uploadImage(e.target.files[0]);
            }}
          />

          {uploading && <p className="text-yellow-400 mt-2">Uploading...</p>}

          {image && (
            <img
              src={image}
              className="w-48 mt-4 mx-auto rounded"
              alt="preview"
            />
          )}
        </div>

        <div className="flex gap-3">
          <button
            disabled={saving}
            onClick={createOrUpdateProject}
            className="bg-[#E0B973] text-black px-6 py-2 rounded"
          >
            {saving
              ? "Saving..."
              : editingId
                ? "Update Project"
                : "Create Project"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="border border-gray-500 px-6 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      {/* PROJECT LIST */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-[#111] rounded-xl overflow-hidden border border-[#222]"
          >
            {p.image && (
              <img
                src={p.image}
                className="w-full h-[200px] object-cover"
                alt={p.title}
              />
            )}

            <div className="p-5">
              <h3 className="text-[#E0B973] text-lg mb-1">{p.title}</h3>

              <p className="text-gray-400 text-sm mb-3">{p.location}</p>

              <p className="text-gray-500 text-sm line-clamp-3">{p.desc}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => editProject(p)}
                  className="text-blue-400 text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProject(p._id)}
                  className="text-red-400 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
