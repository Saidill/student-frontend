'use client';
import { useEffect, useState } from "react";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./services/studentService";
import { Student } from "./types/Student";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleSaveStudent = async () => {
    if (!currentStudent?.namaDepan || !currentStudent.tanggalLahir) {
      alert("Nama Depan dan Tanggal Lahir wajib diisi!");
      return;
    }

    if (isEdit && currentStudent.id) {
      await updateStudent(currentStudent.id, currentStudent);
    } else {
      await addStudent(currentStudent);
    }

    setCurrentStudent(null);
    fetchStudents();
    setIsDialogOpen(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 2000);
  };

  const handleEditStudent = (student: Student) => {
    const [namaDepan, ...namaBelakangParts] = student.namaLengkap?.split(' ') || ['', ''];
    const namaBelakang = namaBelakangParts.join(' ');
    
    setCurrentStudent({
      ...student,
      namaDepan,
      namaBelakang
    });
    setIsEdit(true);
    setIsDialogOpen(true);
  };

  const handleDeleteStudent = async (id: number) => {
    await deleteStudent(id);
    fetchStudents();
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>

      <Button onClick={() => { setIsDialogOpen(true); setIsEdit(false); setCurrentStudent({ namaDepan: "", namaBelakang: "", tanggalLahir: "" }); }}>
        Tambah Mahasiswa
      </Button>

      {isSuccess && (
        <motion.div
          className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Data berhasil {isEdit ? "diperbarui" : "ditambahkan"}!
        </motion.div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Mahasiswa" : "Tambah Mahasiswa"}</DialogTitle>
            <DialogDescription>"Form Edit Mahasiswa"</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Nama Depan"
              value={currentStudent?.namaDepan || ""}
              onChange={(e) => setCurrentStudent({ ...currentStudent!, namaDepan: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Nama Belakang (Opsional)"
              value={currentStudent?.namaBelakang || ""}
              onChange={(e) => setCurrentStudent({ ...currentStudent!, namaBelakang: e.target.value })}
            />
            <Input
              type="date"
              value={currentStudent?.tanggalLahir || ""}
              onChange={(e) => setCurrentStudent({ ...currentStudent!, tanggalLahir: e.target.value })}
            />
            <Button onClick={handleSaveStudent}>{isEdit ? "Update" : "Simpan"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">NIM</th>
            <th className="border p-2">Nama Lengkap</th>
            <th className="border p-2">Usia</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.namaLengkap}</td>
              <td className="border p-2">{student.usia}</td>
              <td className="border p-2 flex gap-2">
                <Button onClick={() => handleEditStudent(student)}>Edit</Button>
                <Button onClick={() => handleDeleteStudent(student.id!)} variant="destructive">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
