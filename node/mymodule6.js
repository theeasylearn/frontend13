module.exports = function (length,width,deapth)
{
    this.length = length;
    this.width = width;
    this.deapth = deapth;

    this.getArea = function()
    {
        return this.length * this.width;
    }

    this.getVolume = function()
    {
        return this.length * this.width * this.deapth;
    }
}