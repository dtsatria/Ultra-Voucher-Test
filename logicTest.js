/*RULE Dilarang menggunakan built in function
1. array.map
2. array.reduce
3. array.filter

EXPECTED OUTPUT
[
    ['cook'],
    ['save','aves','vase'],
    ['taste', 'state'],
    ['map']
]
*/

//deklarasi array
const array = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']

function findMatch(index){
        
        let finalResult = {}
        let koleksi = []

        //mengambil semua isi array
        for (let anagram of index){
            
            //menyusun isi huruf kata yang ada di array yang telah diambil
            let result = anagram.split('').sort().join('')
            
            //memeriksa tiap kata ada atau tidak
            finalResult[result] = finalResult[result] || []

            //memasukan kata yang sudah ketemu cocoknya
            finalResult[result].push(anagram)

        }

        //mememasukan semua kata yang sudah ditemukan
        for (let x in finalResult){
            koleksi.push(finalResult[x])
        }

        console.log(koleksi)

}

//memanggil fungsi findmatch
findMatch(array)
