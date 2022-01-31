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
class customer extends Person {
    constructor(nama, umur, sekolah, hobi) {
        super(nama, umur, sekolah);

        this.hobi = hobi;
    }

    job() {
        return "dan hobi saya adalah " + this.hobi;
    }
}

const Anisa = new Person("Anisa ", "16 tahun", "SMK Yadika Soreang ");
const run= new customer("Anisa ", "16 tahun", "SMK Yadika Soreang ", "Berenang");
console.log(Anisa.run());
console.log(run.job());