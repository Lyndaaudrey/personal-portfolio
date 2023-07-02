window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print() {
  var elementHTML = document.querySelector("#doc2");
  docPDF.html(elementHTML, {
    callback: function (docPDF) {
      docPDF.save("Aka_Ngweyeno_Lynda_CV.pdf");
    },
    x: 15,
    y: 15,
    width: 170,
    windowWidth: 650,
  });
}
