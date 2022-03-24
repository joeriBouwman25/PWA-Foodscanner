
const video = document.querySelector('video')

//  Turn camera On
async function startCameraStream () {
//   showLoader()
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
const detectBarcode = async (req, res) => {
  // eslint-disable-next-line no-undef
  const barcodeDetector = new BarcodeDetector()

  window.setInterval(async () => {
    const barcodes = await barcodeDetector.detect(video)
    if (!barcodes.length <= 0) {
      window.location.href = 'scanner/' + barcodes[0].rawValue
    }
  }, 100)
}

if (window.location.pathname === '/scanner') {
  startCameraStream()
  detectBarcode()
}
