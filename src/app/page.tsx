export default function ProductSpecificationPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto p-8">
          {/* Certificate Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-black mb-2">Detail Sertifikat</h2>
            <div className="w-25 h-0.5 bg-black mx-auto mb-4"></div>
          </div>

          {/* Certificate Content */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Nama Produk</div>
                <div className="text-sm text-black">Bata beton (paving block)</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Jenis Produk</div>
                <div className="text-sm text-black">Paving blok</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Nama Perusahaan</div>
                <div className="text-sm text-black">CV NUGRAHA BETON INDONESIA</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Merk</div>
                <div className="text-sm text-black">NUGRAHA BETON</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Nomor Penerbitan</div>
                <div className="text-sm text-black">-</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Nomor Sertifikat</div>
                <div className="text-sm text-black">054/GIS-SS/Rev-00/IX/2024</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Tanggal Terbit Sertifikat</div>
                <div className="text-sm text-black">12 September 2024</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Tanggal Berakhir Sertifikat</div>
                <div className="text-sm text-black">11 September 2028</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Skema Sertifikasi</div>
                <div className="text-sm text-black">5</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">SNI</div>
                <div className="text-sm text-black">
                  <div>1. SNI 03-0691-1996</div>
                  <div>Bata beton (paving block)</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Tipe Produk</div>
                <div className="text-sm text-black">
                  <div>1. paving block</div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Pabrik</div>
                <div className="text-sm text-black">
                  <div>CV NUGRAHA BETON INDONESIA</div>
                  <div>
                    JALAN RAYA MENGANTI SIDOWUNGU NOMOR 30, Desa/Kelurahan Sidowungu, Kec. Menganti, Kab. Gresik,
                    Provinsi Jawa Timur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
