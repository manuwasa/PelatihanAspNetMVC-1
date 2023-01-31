var datasiswa = [{
    "NIM": 35703,
    "NamaSiswa": "din",
    "Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20",
}, {
     "NIM": 35704,
    "NamaSiswa":"hasan",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
},
{
    "NIM": 35705,
    "NamaSiswa": "jamilah",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
   
}, {
     "NIM": 35706,
    "NamaSiswa":"udin",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
},{
    "NIM": 35707,
    "NamaSiswa": "yanto",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
   
}, {
     "NIM": 35708,
    "NamaSiswa":"heri",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
},{
    "NIM": 35709,
    "NamaSiswa": "agus",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
   
}, {
     "NIM": 35710,
    "NamaSiswa":"sukamto",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
},{
    "NIM": 35711,
    "NamaSiswa": "billy",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
   
}, {
     "NIM": 35712,
    "NamaSiswa":"sujud",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
},{
    "NIM": 35713,
    "NamaSiswa": "yuli",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
   
}, {
     "NIM": 35714,
    "NamaSiswa":"yuliana",
	"Pembayaran": 1000000,
	"TGLPembayaran": "2020-10-20"
}];

$(function(){
	
	$('#btncari').dxButton({
    text: "Proses  Pilih Data",
    height: 35,
    type: "default",
    onClick: function () {

        var url = "";
      //  isi_data_Excel(url);
       
    }
});

$('#btnbersih').dxButton({
    text: "Bersih Data",
    height: 35,
    type: "default",
    onClick: function () {

        var url = "";
       // isi_data_Excel(url);
       
    }
});
 
	 $("#gridsiswa").dxDataGrid({
        dataSource: datasiswa,
        showBorders: true,
		columnAutoWidth: true,
        columnFixing: { enabled: true },
        allowColumnResizing: true,
        scrolling: { columnRenderingMode: "virtual1" },
		 pager: {
            allowedPageSizes: [5, 20, 50],
            showInfo: true,
            showNavigationButtons: true,
            visible: true
        },
		paging: { pageSize: 10 },
		 editing: {
            mode: "row",
            allowDeleting: true,
            useIcons: true,
            texts: {
                addRow: "",
                cancelRowChanges: "",
                confirmDeleteMessage: "Apakah anda ingin menghapus data ini?",
                confirmDeleteTitle: "",
                deleteRow: "",
                editRow: "",
                saveRowChanges: "",
                undeleteRow: "",
                validationCancelChanges: ""
            }
        },
		 columns: [{
                        caption: "NIM",
                        dataField: "NIM",
                        width: 100,
                        readOnly: false

		 },
		 {
                        caption: "Nama Siswa",
                        dataField: "NamaSiswa",
                        width: 150,
                        readOnly: true

		 }, {
                        caption: "Pembayaran",
                        dataField: "Pembayaran",
                        width: 150,
							format: {
								type: "fixedPoint",
								precision: 2
							},
                        readOnly: true

		 },
		  {
                        caption: "TGL Pembayaran",
                        dataField: "TGLPembayaran",
                        width: 158,
						dataType: "date",
						format: "dd-MM-yyyy",					
                        readOnly: true

		 }
		 ],
		  summary: {
            totalItems: [
                {
                    column: "NamaSiswa",
                    showInColumn: "NamaSiswa",
                    displayFormat: "TOTAL"
                },
                {
                    name: "Pembayaran",
                    column: "Pembayaran",
                    showInColumn: "Pembayaran",
                    displayFormat: "{0}",
                    valueFormat: {
                        type: "fixedPoint",
                        precision: 2
                    },
                    summaryType: "sum"
                },
               
            ]
        }, editing: {
            allowDeleting: true,
            allowUpdating: true,
            mode: "row",
            startEditAction: "click",
            texts: {
                addRow: "",
                cancelRowChanges: "",
                confirmDeleteMessage: "",
                confirmDeleteTitle: "",
                deleteRow: "",
                editRow: "",
                saveRowChanges: "",
                undeleteRow: "",
                validationCancelChanges: ""
            }
        },
		onCellPrepared: function (e) {
            if (e.column.type === "buttons" && e.rowType === "data") {
                var $del = e.cellElement.find(".dx-link-delete");
                $del.attr("title", "Hapus Data").attr("style", "padding: 5px 7px; display: in-line; border:none;").append('<i class="dx-icon dx-icon-trash">');

                var $edit = e.cellElement.find(".dx-link-edit");
                $edit.attr("title", "Ubah Data").attr("style", "padding: 5px 7px; display: in-line; border:none;").append('<i class="dx-icon dx-icon-edit">');

                var $save = e.cellElement.find(".dx-link-save");
                $save.attr("title", "Simpan Data").attr("style", "padding: 5px 7px; display: in-line; border:none;").append('<i class="dx-icon dx-icon-save">');

                var $cancel = e.cellElement.find(".dx-link-cancel");
                $cancel.attr("title", "Batal Data").attr("style", "padding: 5px 7px; display: in-line; border:none;").append('<i class="dx-icon dx-icon-revert">');
            }
        }

					
    });
	
	
 $("#txtNIM").dxTextBox({
        type: "text",
        showClearButton: true,
        placeholder: "Masukkan Nomor Induk Mahsiswa"
    });	
 $("#txtNama").dxTextBox({
        type: "text",
        showClearButton: true,
        placeholder: "Masukkan Nama Mahsiswa"
    });	
 $("#txtPembayaran").dxTextBox({
        type: "text",
        showClearButton: true,
        placeholder: "Masukkan Pembayaran Mahsiswa"
    });	
 $("#txtTGLPembayaran").dxTextBox({
        type: "text",
        showClearButton: true,
        placeholder: "Masukkan tanggal pembayaran Mahsiswa"
    });	


    $("#btnSearchHis").dxButton({
        icon: "search",
        text: "Cari Data",
        type: "default",
        stylingMode: "outlined",
        onClick: function (e) {
           
        }
    });

    $("#btnResetHis").dxButton({
        icon: "revert",
        text: "Reset",
        type: "default",
        stylingMode: "outlined",
        disabled: true,
        onClick: e => {
          
        }
    });
	
	
});