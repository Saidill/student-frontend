# Student Crud System Frontend

## 🚀 Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Axios

## 📱 Demo & Tutorial

[![Watch the demo](https://img.shields.io/badge/YouTube-Tutorial-red)](https://youtu.be/NGNJoxM63k8)

Watch demo application:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NGNJoxM63k8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

1. Clone repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment:
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

4. Run development server:
```bash
npm run dev
# or
yarn dev
```

## 🎯 Features

- ✨ Responsive design
- 📝 CRUD operations for student data
- 🎨 Modern UI with shadcn/ui
- 🔄 Real-time updates

## 📚 Project Structure

```
src/
├── app/
│   └── page.tsx        # Main page
├── components/         # UI components
├── services/          # API services
└── types/             # TypeScript types
```

## 🔧 Usage

1. Add Student:
   - Click "Tambah Mahasiswa"
   - Fill required fields
   - Click "Simpan"

2. Edit Student:
   - Click "Edit" on student row
   - Update fields
   - Click "Update"

3. Delete Student:
   - Click "Hapus" on student row
   - Confirm deletion

## 🚀 Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📝 Notes

- Backend API must be running at `http://localhost:8080`
- Update API URL in `.env.local` if using different backend URL