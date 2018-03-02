import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      note: "备注：输入事件，点击回车即可添加事件"
    }
  },
  render() {
    return (
      <div id="footer">
        <span>{this.note}</span>
      </div>
    )
  }
}