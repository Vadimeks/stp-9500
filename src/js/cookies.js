import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', () => {
  const cookiesWindow = document.querySelector('.cookies-window');
  const acceptButton = document.getElementById('acceptCookies');
  const declineButton = document.getElementById('declineCookies');

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

  function showToast(message, type = 'info') {
    let backgroundColor = '#007bff';
    let messageColor = '#fff';

    if (type === 'accept') {
      backgroundColor = '#000';
      messageColor = '#fff';
    } else if (type === 'decline') {
      backgroundColor = '#d9d9d9';
      messageColor = '#000';
    } else if (type === 'success') {
      backgroundColor = '#4CAF50';
    } else if (type === 'error') {
      backgroundColor = '#f44336';
    }

    iziToast.show({
      message: message,
      position: 'bottomCenter',
      backgroundColor: backgroundColor,
      messageColor: messageColor,
      timeout: 3000,
      progressBar: false,
    });
  }

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieWindow();
    showToast('You accepted using cookies.', 'accept');
  });

  declineButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieWindow();
    showToast('You declined using cookies.', 'decline');
  });
});
