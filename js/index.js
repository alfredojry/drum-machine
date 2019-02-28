var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // React
var
DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this.state = {
      message: '',
      volume: 50 };

    _this.handleChangeRange = _this.handleChangeRange.bind(_this);
    _this.handleChangeQ = _this.handleChangeQ.bind(_this);
    _this.handleChangeW = _this.handleChangeW.bind(_this);
    _this.handleChangeE = _this.handleChangeE.bind(_this);
    _this.handleChangeA = _this.handleChangeA.bind(_this);
    _this.handleChangeS = _this.handleChangeS.bind(_this);
    _this.handleChangeD = _this.handleChangeD.bind(_this);
    _this.handleChangeZ = _this.handleChangeZ.bind(_this);
    _this.handleChangeX = _this.handleChangeX.bind(_this);
    _this.handleChangeC = _this.handleChangeC.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  }_createClass(DrumMachine, [{ key: 'componentDidMount', value: function componentDidMount()
    {
      document.addEventListener('keydown', this.handleKeyPress);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    } }, { key: 'handleChangeRange', value: function handleChangeRange(
    event) {
      this.setState({
        volume: event.target.value,
        message: 'Volume: ' + event.target.value });

      var letter = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
      var volume = this.state.volume / 100;
      letter.forEach(function (char) {
        document.getElementById(char).volume = volume;
      });
    } }, { key: 'handleChangeQ', value: function handleChangeQ()
    {
      var audioClip = document.getElementById('Q');
      this.setState({
        message: 'Chord #1' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeW', value: function handleChangeW()
    {
      var audioClip = document.getElementById('W');
      this.setState({
        message: 'Chord #2' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeE', value: function handleChangeE()
    {
      var audioClip = document.getElementById('E');
      this.setState({
        message: 'Chord #3' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeA', value: function handleChangeA()
    {
      var audioClip = document.getElementById('A');
      this.setState({
        message: 'Heater #6' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeS', value: function handleChangeS()
    {
      var audioClip = document.getElementById('S');
      this.setState({
        message: 'Brk_Snr' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeD', value: function handleChangeD()
    {
      var audioClip = document.getElementById('D');
      this.setState({
        message: 'Bld_H1' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeZ', value: function handleChangeZ()
    {
      var audioClip = document.getElementById('Z');
      this.setState({
        message: 'Heater #1' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeX', value: function handleChangeX()
    {
      var audioClip = document.getElementById('X');
      this.setState({
        message: 'Heater #2' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleChangeC', value: function handleChangeC()
    {
      var audioClip = document.getElementById('C');
      this.setState({
        message: 'Heater #3' });

      audioClip.currentTime = 0;
      audioClip.volume = this.state.volume / 100;
      audioClip.play();
    } }, { key: 'handleKeyPress', value: function handleKeyPress(
    event) {
      switch (event.keyCode) {
        case 81:
          //this.handleChangeQ();
          document.getElementById('chord-1').click();
          break;
        case 87:
          this.handleChangeW();
          break;
        case 69:
          this.handleChangeE();
          break;
        case 65:
          this.handleChangeA();
          break;
        case 83:
          this.handleChangeS();
          break;
        case 68:
          this.handleChangeD();
          break;
        case 90:
          this.handleChangeZ();
          break;
        case 88:
          this.handleChangeX();
          break;
        case 67:
          this.handleChangeC();
          break;}

    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', { id: 'top-container' },
            React.createElement('h2', { className: 'text-center' }, 'Drum Machine')),

          React.createElement('div', { id: 'left-container' },

            React.createElement('button', { className: 'drum-pad btn', id: 'chord-1', onClick: this.handleChangeQ }, 'Q',
              React.createElement('audio', { id: 'Q', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'chord-2', onClick: this.handleChangeW }, 'W',
              React.createElement('audio', { id: 'W', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'chord-3', onClick: this.handleChangeE }, 'E',
              React.createElement('audio', { id: 'E', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'heater-6', onClick: this.handleChangeA }, 'A',
              React.createElement('audio', { id: 'A', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'brk-snr', onClick: this.handleChangeS }, 'S',
              React.createElement('audio', { id: 'S', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'bld-h1', onClick: this.handleChangeD }, 'D',
              React.createElement('audio', { id: 'D', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'heater-1', onClick: this.handleChangeZ }, 'Z',
              React.createElement('audio', { id: 'Z', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'heater-2', onClick: this.handleChangeX }, 'X',
              React.createElement('audio', { id: 'X', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' })),


            React.createElement('button', { className: 'drum-pad btn', id: 'heater-3', onClick: this.handleChangeC }, 'C',
              React.createElement('audio', { id: 'C', className: 'clip', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' }))),


          React.createElement('div', { id: 'right-container' },
            React.createElement('div', { id: 'display', className: 'text-center' },
              this.state.message),

            React.createElement('div', null,
              React.createElement('input', { type: 'range', onChange: this.handleChangeRange })))));




    } }]);return DrumMachine;}(React.Component);


ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('root'));