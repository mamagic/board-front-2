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
    </v-app>
  </template>
  
  <script>
  import { uploadFile } from './url'
  export default {
    methods: {
      onPickFile () {
         this.$refs.fileInput.click()
      },
      onUploadFile (file) {
        let formData = new FormData()
        formData.append('file', file[0])
        uploadFile(formData)
          .then(() => {
            this.onLoadFiles()
          })
          .catch(error => {
            /* eslint-disable no-console */
            console.log(error)
          })
      },
      onFilePicked (event) {
        const files = event.target.files // file info load
  
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please pick valid file')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.onUploadFile(files)
      }
    }
  }
  </script>