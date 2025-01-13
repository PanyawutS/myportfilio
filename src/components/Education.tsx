import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
  const educationHistory = [
    {
      school: "มหาวิทยาลัย...",
      degree: "ปริญญา...",
      year: "25XX - 25XX",
      description: "คณะ... สาขา...",
    },
    // สามารถเพิ่มประวัติการศึกษาเพิ่มเติมได้ตามต้องการ
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">ประวัติการศึกษา</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {educationHistory.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                  <p className="mt-2">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;