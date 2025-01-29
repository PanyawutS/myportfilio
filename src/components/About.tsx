import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">เกี่ยวกับผม</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
            สวัสดีครับ ผมปัญญาวุธ แสงแดง เป็นนักศึกษาชั้นปีที่ 3 วิทยาลัยการคอมพิวเตอร์ สาขาวิทยาการคอมพิวเตอร์  มหาวิทยาลัยขอนแก่น
            ที่ชื่นชอบในการเขียนโปรแกรม และพัฒนาเว็บไซต์ 
            </p>
            <p>
            ผมมีสามารถในการใช้เทคโนโลยีที่หลากหลาย และพร้อมที่จะเรียนรู้สิ่งใหม่ๆ
            เพื่อพัฒนาตัวเองอยู่เสมอ
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;