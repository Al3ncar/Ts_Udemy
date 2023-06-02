export const people = {
    name: 'Igor',
    lastName: 'Alencar',

    returnFullName(): void {
        console.log(this.name + " " + this.lastName)
    }
}
people.returnFullName()