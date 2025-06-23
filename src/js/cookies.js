document.addEventListener('DOMContentLoaded', () => {
  const cookiesWindow = document.querySelector('.cookies-window');
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptButton = document.getElementById('acceptCookies');
  const declineButton = document.getElementById('declineCookies');
  const cookieMessage = document.getElementById('cookieMessage');
  const cookieMessageText = document.getElementById('cookieMessageText');

  const userConsent = localStorage.getItem('cookieConsent');

  if (userConsent) {
    cookiesWindow.style.display = 'none';
  } else {
    cookiesWindow.style.display = 'block';
  }

  function hideCookieWindow() {
    cookiesWindow.style.opacity = '0';
    cookiesWindow.style.visibility = 'hidden';
    setTimeout(() => {
      cookiesWindow.style.display = 'none';
    }, 500);
  }

  function showMessage(message) {
    cookieMessageText.textContent = message;
    cookieMessage.style.opacity = '1';
    cookieMessage.style.visibility = 'visible';

    setTimeout(() => {
      cookieMessage.style.opacity = '0';
      cookieMessage.style.visibility = 'hidden';
      setTimeout(() => {
        cookieMessage.style.display = 'none';
      }, 500);
    }, 3000);
  }

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieWindow();
    showMessage('You accepted using cookies');
  });

  declineButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieWindow();
    showMessage('You declined using cookies');
  });
});
