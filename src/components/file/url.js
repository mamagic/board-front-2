export function uploadFile(formData) {
	return formRequest({
		url: 'http://localhost:8081'+ '/file/uploadFile',
		method: 'POST',
		body: formData
	})
}

function formRequest(options) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open(options.method, options.url, true);
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            if (xhr.status === 401) {
              resolve(xhr.responseText); // 다른 상태 코드는 성공으로 처리
              //reject(new Error(`Unauthorized: ${xhr.status}`));
              // 여기에서 401 오류를 처리하고 사용자에게 알림을 보여줄 수 있습니다.
            } else {
              resolve(xhr.responseText); // 다른 상태 코드는 성공으로 처리
            }
          }
        }
      };
  
      xhr.onerror = function () {
        reject(new Error('Request failed'));
      };
  
      xhr.send(options.body);
    });
  }