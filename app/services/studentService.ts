import axios from "axios";
import { Student } from "../types/Student";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getStudents = async () => {
  const response = await axios.get<Student[]>(API_URL!);
  return response.data;
};

export const addStudent = async (student: Student) => {
  const response = await axios.post<Student>(API_URL!, student);
  return response.data;
};

export const updateStudent = async (id: number, student: Student) => {
  const response = await axios.put<Student>(`${API_URL}/${id}`, student);
  return response.data;
};

export const deleteStudent = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
