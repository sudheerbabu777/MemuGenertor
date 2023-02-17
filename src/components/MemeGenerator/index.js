import {Component} from 'react'
import {
  Title,
  AppContainer,
  FromContainer,
  InputContainer,
  InputBar,
  InputSelect,
  Label,
  CustomButton,
  MemeImage,
  IMemeGenerateContainer,
  CustomOption,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    return (
      <IMemeGenerateContainer
        background={backgroundImageUrl}
        data-testid="meme"
      >
        <MemeImage activeFontSizeId={activeFontSizeId}>{topText}</MemeImage>
        <MemeImage activeFontSizeId={activeFontSizeId}>{bottomText}</MemeImage>
      </IMemeGenerateContainer>
    )
  }

  render() {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    return (
      <AppContainer>
        <FromContainer onSubmit={this.onSubmitButton}>
          <Title>Meme Generator</Title>
          <InputContainer>
            <Label htmlFor="urlInput">Image URL</Label>
            <InputBar
              type="text"
              id="urlInput"
              placeholder="Enter the image URL"
              onChange={this.onChangeImageUrl}
              value={backgroundImageUrlInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="topInput">Top Text</Label>
            <InputBar
              type="text"
              id="topInput"
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
              value={topTextInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="bottomInput">Bottom Text</Label>
            <InputBar
              type="text"
              id="bottomInput"
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
              value={bottomTextInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fontInput">Font Size</Label>
            <InputSelect
              id="fontInput"
              onChange={this.onChangeSelectOption}
              value={activeFontSizeOptionId}
            >
              {fontSizesOptionsList.map(each => (
                <CustomOption value={each.displayText} key={each.optionId}>
                  {each.displayText}
                </CustomOption>
              ))}
            </InputSelect>
          </InputContainer>
          <CustomButton type="submit">Generate</CustomButton>
        </FromContainer>
        {this.renderMeme()}
      </AppContainer>
    )
  }
}

export default MemeGenerator
