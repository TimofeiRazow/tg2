
  window.Telegram.WebApp.onEvent('user', function(userData) {
    console.log(userData);  // Выведет информацию о пользователе в консоль
  });

  // Для работы с кнопками
  window.Telegram.WebApp.onEvent('mainButtonClicked', function() {
    alert('Main button clicked');
  });
  
  // Изменение текста на кнопке
  window.Telegram.WebApp.MainButton.setText("Нажмите сюда");
  window.Telegram.WebApp.MainButton.show();  // Показывает кнопку