function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const teacher = document.getElementById("teacher").value;
  const activity = document.getElementById("activity").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.text("تقرير النشاط", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.text(`اسم المعلم: ${teacher}`, 20, 40);
  doc.text(`اسم النشاط: ${activity}`, 20, 50);
  doc.text(`التاريخ: ${date}`, 20, 60);
  doc.text("ملاحظات:", 20, 70);
  doc.text(notes, 20, 80);

  doc.save("تقرير-النشاط.pdf");
}
