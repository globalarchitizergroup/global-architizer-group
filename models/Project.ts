import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
{
title: String,
location: String,
desc: String,
image: String
},
{ timestamps: true }
);

export default mongoose.models.Project ||
mongoose.model("Project", ProjectSchema);