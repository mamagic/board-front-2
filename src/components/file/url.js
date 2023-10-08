export function uploadFile(formData) {
	return formRequest({
		url: 'localhost:8081'+ '/file/uploadFile',
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
            reject(new Error(`Request failed with status: ${xhr.status}`));
          }
        }
      };
  
      xhr.onerror = function () {
        reject(new Error('Request failed'));
      };
  
      xhr.send(options.body);
    });
  }