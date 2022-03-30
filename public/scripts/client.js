//  Global variable
const video = document.querySelector('video')
const hiddenDiv = document.querySelector('div')

if(hiddenDiv){
  hiddenDiv.classList.remove('none')
}


//  Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/worker.js')
      .then(function(registration){
        return registration.update()
      })
  })
}

//  Turn camera On
async function startCameraStream () {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: {
        ideal: 'environment'
      }
    },
    audio: false
  })
  video.srcObject = stream
  await video.play()
  
}

// Create barcode scanner
const detectBarcode = async () => {
  const barcodeDetector = new BarcodeDetector()

  window.setInterval(async () => {
    const barcodes = await barcodeDetector.detect(video)
    if (!barcodes.length <= 0) {
      window.location.href = 'scanner/' + barcodes[0].rawValue
    }
  }, 100)
}

// Add loading to camera
async function createScanner() {
  const loading = document.getElementsByClassName('loader')[0]
  const scanner = document.getElementsByClassName('scanner')[0]
  loading.classList.add('active')
  scanner.classList.remove('active')
  await startCameraStream()
  await detectBarcode()
  scanner.classList.add('active')
  loading.classList.remove('active')
}

if (window.location.pathname === '/scanner') {
  createScanner()
  }

  
  



