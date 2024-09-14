$(document).ready(function() {
  const $balloon = $('#balloon');
  let balloonSize = 200; // ขนาดเริ่มต้นของบอลลูน
  let colorIndex = 0;
  const colors = ['red', 'green', 'blue']; // ลำดับของสี

  // ฟังก์ชันเพื่อจัดการการเปลี่ยนสีแบบวนไปข้างหน้าและถอยหลัง
  function cycleColor(forward = true) {
      colorIndex = forward ? (colorIndex + 1) % 3 : (colorIndex - 1 + 3) % 3;
      $balloon.css('background-color', colors[colorIndex]);
  }

  // ฟังก์ชันรีเซ็ตบอลลูนเมื่อมันระเบิด
  function resetBalloon() {
      balloonSize = 200;
      $balloon.css({
          width: `${balloonSize}px`,
          height: `${balloonSize}px`,
          'background-color': 'red'
      });
      colorIndex = 0;
  }

  // จัดการกับเหตุการณ์คลิก (บอลลูนขยายใหญ่ขึ้น)
  $balloon.on('click', function() {
      balloonSize += 10;
      $balloon.css({
          width: `${balloonSize}px`,
          height: `${balloonSize}px`
      });
      cycleColor();

      // ตรวจสอบว่าบอลลูนมีขนาดเกิน 420px หรือไม่ ถ้าใช่ ให้ "ระเบิด"
      if (balloonSize > 420) {
          resetBalloon();
      }
  });

  // จัดการกับเหตุการณ์ mouse leave (บอลลูนย่อเล็กลง)
  $balloon.on('mouseleave', function() {
      if (balloonSize > 200) {
          balloonSize -= 5;
          $balloon.css({
              width: `${balloonSize}px`,
              height: `${balloonSize}px`
          });
          cycleColor(false);
      }
  });
});

  