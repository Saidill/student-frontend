# Student Crud System Frontend

## 🚀 Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Axios

## 📱 Demo
Watch Demo Video
https://youtu.be/NGNJoxM63k8


## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

1. Clone repository:
```bash
git clone https://github.com/Saidill/student-frontend.git
cd student-frontend
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

- 📝 CRUD operations for student data
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