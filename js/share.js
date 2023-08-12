const url = 'https://12ganjilovetype.netlify.app/';

function setShare() {
  var resultImg = document.querySelector("#resultImg");
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '십이간지 연애유형 결과' ;
  const shareDesc = infoList[resultAlt].name ;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDesc,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: shareURL,
        },
      }
    ],
  });
}
