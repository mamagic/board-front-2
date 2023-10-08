<template>
  <v-app>
    <v-btn raised class="primary" @click="onPickFile">Upload</v-btn>
    <input
      type="file"
      style="display: none"
      ref="fileInput"
      accept="*"
      @change="onFilePicked"
      required
    >
    <br>
    <br>

    <!-- 파일 다운로드 버튼 -->
    <v-btn raised class="primary" @click="downloadFile">Download</v-btn>
  </v-app>
</template>

<script>
import { uploadFile } from './url'

export default {
  data() {
    return {
      fileInfo: null
    }
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    downloadFile() {

  // Check if fileInfo is available
  if (this.fileInfo) {
    // Define the URL to download the file from.
    const fileName = this.fileInfo.fileName; // Replace with the actual file name.
    const downloadUrl = 'http://localhost:8081/file/downloadFile/' + this.fileInfo.fileName;

    // Create a new XMLHttpRequest to fetch the file data.
    const xhr = new XMLHttpRequest();
    xhr.open('GET', downloadUrl, true);
    xhr.responseType = 'blob';

    // Handle the onload event when the file data is received.
    xhr.onload = () => {
      if (xhr.status === 200) {
        // Create a Blob object from the received data.
        const blob = new Blob([xhr.response], { type: 'application/octet-stream' });

        // Create a URL for the Blob object.
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a temporary link element to trigger the download.
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.download = fileName;

        // Trigger the click event to start the download.
        document.body.appendChild(link);
        link.click();

        // Remove the temporary link and revoke the Blob URL.
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }
    };

    // Send the XMLHttpRequest to fetch the file data.
    xhr.send();
  }
}
,
    onUploadFile(file) {
      let formData = new FormData()
      formData.append('file', file[0])
      uploadFile(formData)
        .then((response) => {
          this.fileInfo = JSON.parse(response);
        })
        .catch((error) => {
          /* eslint-disable no-console */
          console.log(error)
        })
    },
    onFilePicked(event) {
      const files = event.target.files // file info load
      this.onUploadFile(files)
    }
  }
}
</script>
