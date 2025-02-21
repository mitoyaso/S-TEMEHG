// script.js
// Bu dosya, sayfanıza ekleyeceğiniz etkileşimli JavaScript kodlarını içerir.

document.addEventListener("DOMContentLoaded", function() {
  // Örnek etkileşim: Eğer bir buton eklemek isterseniz, aşağıdaki kodu aktif edebilirsiniz.
  // HTML dosyanıza aşağıdaki buton kodunu ekleyin:
  // <button id="changeColorBtn">Başlığı Mavi Yap</button>

  var changeColorBtn = document.getElementById("changeColorBtn");
  if (changeColorBtn) {
    changeColorBtn.addEventListener("click", function() {
      document.querySelector("h1").style.color = "blue";
    });
  }
});