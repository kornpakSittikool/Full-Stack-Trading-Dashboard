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

npm install `<package-name>` --workspace=apps/client


## การติดตั้งแพ็กเกจใน `apps/service`
หากต้องการติดตั้งแพ็กเกจเฉพาะใน `apps/service`:

npm install `<package-name>` --workspace=apps/service

## การติดตั้ง แพ็ก ทั้ง client และ service
npm install `<package-name>` -w

## Code Scan Rules with Semgrep

โปรเจ็กต์นี้ประกอบด้วยชุดกฎ Semgrep ที่ออกแบบมาเพื่อปรับปรุงความปลอดภัย ความสามารถในการบำรุงรักษา และคุณภาพโดยรวมของฐานโค้ด JavaScript/TypeScript ของคุณ กฎแต่ละข้อจะกำหนดเป้าหมายไปที่รูปแบบเฉพาะเพื่อตรวจจับช่องโหว่ที่อาจเกิดขึ้นหรือกลิ่นของโค้ด ภาพรวมกฎ 

**Rules Overview**

-  Detect eval-usage

-  Detect function-usage

-  Detect hardcoded-secret

-  Detect insecure-endpoint

-  Detect sensitive-logging

-  Detect unsafe-regular-expressions

-  Detect-unvalidated-input

-  Detect duplicated functions

-  Detect duplicate-code

-  Detect long-function

-  Detect complex-if-else

-  Detect duplicate-loop

-  Detect hardcoded-value

## Code Scan with CodeQL

การใช้งาน CodeQL เป็นส่วนหนึ่งของกระบวนการพัฒนาเพื่อให้โปรเจ็คของเรามีความปลอดภัยและมีคุณภาพที่ดีขึ้น. ด้วยการติดตั้ง CodeQL, เราสามารถตรวจสอบและจัดการช่องโหว่ได้อย่างมีประสิทธิภาพ, ลดความเสี่ยงในระบบ และช่วยให้โปรเจ็คของเรามีความเสถียรและปลอดภัยสำหรับผู้ใช้งาน.

## Dependabot
การใช้งาน Dependabot เป็นส่วนหนึ่งของกระบวนการพัฒนาเพื่อให้โปรเจ็คของเรามีการอัปเดต dependencies ที่ปลอดภัยและทันสมัยอยู่เสมอ. ด้วยการติดตั้ง Dependabot, เราสามารถลดความเสี่ยงจากช่องโหว่ใน dependencies, ประหยัดเวลาในการอัปเดต, และช่วยให้โปรเจ็คของเรามีความเสถียรและปลอดภัยมากยิ่งขึ้น.

