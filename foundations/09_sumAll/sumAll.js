const sumAll = function (min, max) {
  // 1. Tip ve Pozitiflik Kontrolleri
  // Sayı değillerse, negatifseler veya tam sayı değillerse ERROR dön
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    min < 0 ||
    max < 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  ) {
    return "ERROR";
  }

  // 2. Büyük-Küçük Sıralaması
  // Eğer min sayısı max sayısından büyükse yerlerini değiştir
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // 3. Toplamı Hesaplama
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
