class Person{
    constructor(nama, umur, sekolah){
        this.nama = nama;
        this.umur = umur;
        this.sekolah = sekolah;
    }
    
    run() {
    return "Nama saya " + this.nama + "umur " + this.umur + " sekolah di " + this.sekolah;
    }

    run2() {
        return this;
    }
}

const Anisa = new Person("Anisa ", "16 tahun", "SMK Yadika Soreang ");
console.log(Anisa.run());

console.log(Anisa.run2());