class UploadImage extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        photo: null,
    }

    ChoosePhoto = () => {
        const options = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response })
            }
        })
    }
    render() {
        const { photo } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                )}
                <Button title="Choisir une Photo" onPress={this.ChoosePhoto} />
            </View>
        )
    }
}