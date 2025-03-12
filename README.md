# Full-Stack-Trading-Dashboard
- **รายละเอียด**: พัฒนา Dashboard สำหรับวิเคราะห์และแสดงราคาหุ้น/ทองคำแบบ Real-Time พร้อมระบบแจ้งเตือนผ่าน Line หรือ Email
- **เทคโนโลยี**:
    - Frontend: React (Next.js) + Tailwind
    - Backend: FastAPI (Python) + WebSocket
    - Database: MongoDB
    - DevOps: Docker + Kubernetes + Prometheus (Monitoring)
    - จุดเด่น: Integrate ข้อมูลจาก API จริง (SET, Gold API), ทำ CI/CD ผ่าน GitHub Actions
- **โครงสร้าง Project trading-dashboard**
```
- backend/            # FastAPI Service
- frontend/           # Next.js (React) Dashboard
- docker-compose.yml  # สำหรับ Dev Environment
```
