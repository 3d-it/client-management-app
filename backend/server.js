import express from "express";
import cors from "cors";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET ALL CLIENTS
app.get("/api/clients", (req, res) => {
    const rows = db.prepare("SELECT * FROM clients ORDER BY id ASC").all();
    res.json(rows);
});

// ADD CLIENT
app.post("/api/clients", (req, res) => {
    const { name, email, phone } = req.body;

    const result = db.prepare(`
        INSERT INTO clients (name, email, phone)
        VALUES (?, ?, ?)
    `).run(name, email, phone);

    res.json({ id: result.lastInsertRowid, name, email, phone });
});

// UPDATE CLIENT
app.put("/api/clients/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    db.prepare(`
        UPDATE clients
        SET name = ?, email = ?, phone = ?
        WHERE id = ?
    `).run(name, email, phone, id);

    res.json({ id, name, email, phone });
});

// DELETE CLIENT
app.delete("/api/clients/:id", (req, res) => {
    const { id } = req.params;

    db.prepare("DELETE FROM clients WHERE id = ?").run(id);

    res.json({ success: true });
});

// START SERVER
app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
