# Full-Stack-Trading-Dashboard
- **รายละเอียด**: พัฒนา Dashboard สำหรับวิเคราะห์และแสดงราคาหุ้น/ทองคำแบบ Real-Time พร้อมระบบแจ้งเตือนผ่าน Line หรือ Email
- **เทคโนโลยี**:
    - Frontend: React (Next.js) + Tailwind
    - Backend: nest js + WebSocket
    - Database: MongoDB
    - DevOps: Docker + Kubernetes + Prometheus (Monitoring)
    - จุดเด่น: Integrate ข้อมูลจาก API จริง (SET, Gold API), ทำ CI/CD ผ่าน GitHub Actions
- **โครงสร้าง Project trading-dashboard**
- backend/            # nest js Service
- frontend/           # Next.js (React) 

**โครงสร้างของ MonoRepo** นี้รองรับการติดตั้งแพ็กเกจในแต่ละ workspace หรือใน root โดยใช้คำสั่ง NPM Workspaces เพื่อการจัดการที่มีประสิทธิภาพ

---

## การติดตั้งแพ็กเกจใน `Project`
หากต้องการติดตั้งแพ็กเกจเฉพาะใน `apps/client`:

npm install <package-name> --workspace=apps/client


## การติดตั้งแพ็กเกจใน `apps/service`
หากต้องการติดตั้งแพ็กเกจเฉพาะใน `apps/service`:

npm install <package-name> --workspace=apps/service

## การติดตั้ง แพ็ก ทั้ง client และ service
npm install <package-name> -w
