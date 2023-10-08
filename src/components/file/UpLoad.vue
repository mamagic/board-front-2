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
        const downloadUrl = 'http://localhost:8081/downloadFile/'+ fileName;

        // Create a new <a> element and use it to download the file.
        const a = document.createElement('a');
        a.style.display = 'none';
        document.body.appendChild(a);

        // Set the download URL and click to start downloading the file.
        a.href = downloadUrl;
        a.download = fileName; // Set the file name to be downloaded.
        a.click();

        // Remove the created <a> element.
        document.body.removeChild(a);
      }
    },
    onUploadFile(file) {
      let formData = new FormData()
      formData.append('file', file[0])
      uploadFile(formData)
        .then((response) => {
          console.log(response.fileDownloadUri)
          this.fileInfo = response
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
