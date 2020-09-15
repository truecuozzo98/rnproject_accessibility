import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, findNodeHandle, AccessibilityInfo, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import FocusOrder from './FocusOrder';
import AccessibilityFocus from './AccessibilityFocus';
import AccessibilityRN from './AccessibilityRN';
import { NativeEventEmitter, NativeModules } from 'react-native';


function AtShowcase({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Text accessibilityRole='header' style={styles.header}>Accessibility Focus</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API1') }}>
                        <Text style={styles.api}>1. Specify which views should receive the accessibility focus</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API2') }}>
                        <Text style={styles.api}>2. Specify the accessibility focus order</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API3') }}>
                        <Text style={styles.api}>3. Assign the accessibility focus to a view</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API4') }}>
                        <Text style={styles.api}>4. Specify actions associated to accessibility focus-related events (e.g., a view acquires or loses the focus)</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API5') }}>
                        <Text style={styles.api}>5. Determine whether a view has the accessibility focus or which view has the accessibility focus</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Text to Announce</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API6') }}>
                        <Text style={styles.api}>6. Specify attributes that contribute to form the text-to-announce</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>7. Programmatically define the text-to-announce</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API8') }}>
                        <Text style={styles.api}>8. Use one view to describe another one</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API9') }}>
                        <Text style={styles.api}>9. Specify that a view should be announced when changed, even without user interaction</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>10. Specify in which language the text-to-annouce should be read</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Explicit TTS</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API11') }}>
                        <Text style={styles.api}>11. Read a text with the screen-reader TTS</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>12. Be informed when the screen-reader finishes reading an explicitly provided text.</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>13. Customize screen-reader TTS speech features, like pitch, speed, etc...</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API14') }}>
                        <Text style={styles.api}>14. Read a text with non-screen-reader TTS (also works when screen-reader is not active)</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>15. Detect whether the non-screen-reader TTS is reading</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>16. Pause the non-screen-reader TTS</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API17') }}>
                        <Text style={styles.api}>17. Customize non-screen-reader TTS speech features, like pitch, speed, etc...</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Accessibility Tree</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API18') }}>
                        <Text style={styles.api}>18. Aggregate multiple views into a single accessible element</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>19. Decompose a view into multiple accessibility elements</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API20') }}>
                        <Text style={styles.api}>20. Get the parent accessible element</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Miscellaneous</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API21') }}>
                        <Text style={styles.api}>21. Detect whether screen-reader is active</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API22') }}>
                        <Text style={styles.api}>22. Support navigation by specifying which views are headers or panes</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API23') }}>
                        <Text style={styles.api}>23. Define how to respond to user actions that are only available when the screen reader is active</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('API24') }}>
                        <Text style={styles.api}>24. Perform actions on user's behalf</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} >
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.not_aviable}>25. Associate arbitrary accessibility-related information to a view</Text>
                            <Text style={styles.platform}>Not available on this platform</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

function API1() {
    const [accessible, setAccessible] = useState(true)

    function setForkAccessibility() {
        if (accessible) {
            setAccessible(false)
        } else {
            setAccessible(true)
        }
    }

    return (
        <>
            <View>
                <Image
                    accessible={accessible}
                    accessibilityLabel='image of a fork'
                    importantForAccessibility={accessible ? "yes" : "no-hide-descendants"}
                    source={require('./img/fork.png')}
                    style={styles.fork} />
            </View>

            <View style={styles.switch}>
                <Text importantForAccessibility="no-hide-descendants" >Press the switch to change{"\n"}the accessibility of the image</Text>
                <Switch
                    accessibilityLabel={"Press the switch to change the accessibility of the image"}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={accessible ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={setForkAccessibility}
                    value={accessible}
                />
            </View>
        </>
    )
}

function API2() {
    const [topDown, setTopDown] = useState(true)
    const [text, setText] = useState('CHANGE FOCUS ORDER TO LEFT-RIGHT')

    const ref1 = React.useRef()
    const ref2 = React.useRef()
    const ref3 = React.useRef()
    const ref4 = React.useRef()

    function changeOrder() {
        if (topDown) {
            setTopDown(false)
            setText('CHANGE FOCUS ORDER TO TOP-DOWN')
            FocusOrder.setOrder([
                findNodeHandle(ref1.current),
                findNodeHandle(ref3.current),
                findNodeHandle(ref2.current),
                findNodeHandle(ref4.current)
            ])
        } else {
            setTopDown(true)
            setText('CHANGE FOCUS ORDER TO LEFT-RIGHT')
            FocusOrder.setOrder([
                findNodeHandle(ref1.current),
                findNodeHandle(ref2.current),
                findNodeHandle(ref3.current),
                findNodeHandle(ref4.current)
            ])
        }
    }

    return (
        <>
            <View style={styles.focusOrder}>
                <TouchableOpacity ref={ref1} style={[styles.positionUp, styles.orderButton]}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity ref={ref3} style={[styles.position3, styles.orderButton]}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity ref={ref2} style={[styles.position2, styles.orderButton]}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity ref={ref4} style={[styles.position4, styles.orderButton]}>
                    <Text>4</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.button}>
                <Button title={text} onPress={() => changeOrder()} />
            </View>

            <Text style={styles.footer}>i: Views 1, 2, 3 and 4 are displayed in such a way that reading them from top to bottom results in 1, 2, 3, 4, while reading them from left to right is: 1, 3, 2, 4.</Text>
        </>
    )
}

function API3() {
    const ref = React.useRef()

    const changeFocus = () => {
        const tag = findNodeHandle(ref.current)
        AccessibilityInfo.setAccessibilityFocus(tag)
    }

    return (
        <View style={styles.container}>
            <View ref={ref} accessible={true} style={{ marginBottom: 20 }}>
                <Text>Generic view</Text>
            </View>

            <View style={styles.button}>
                <Button title='assign focus to generic view' onPress={changeFocus} />
            </View>
        </View>
    )
}

function API4() {
    const [hasFocus, setFocus] = useState(false)

    function playBeep(beep) {
        var beepFile = ''
        switch (beep) {
            case 'on':
                beepFile = 'sound_beep1.mp3'
                break
            case 'off':
                beepFile = 'sound_beep2.mp3'
                break
            default:
                console.error('ERROR: "beep" variable can only assume the values "on" and "off"')
                break
        }

        console.log(beepFile)
        const sound = new Sound(beepFile, null, (error) => {
            if (error) {
                console.log('cannot play the sound file', error)
            }
            sound.play()
        })
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ margin: 20 }}>{hasFocus ? 'Bell image has focus' : 'Bell image does not have focus'}</Text>

            <AccessibilityFocus
                style={{ margin: 20 }}
                onFocusStart={() => { playBeep('on'), setFocus(true) }}
                onFocusEnd={() => { playBeep('off'), setFocus(false) }}
            >
                <TouchableOpacity>
                    <Image source={require('./img/bell.png')} style={styles.bell} />
                </TouchableOpacity>
            </AccessibilityFocus>

            <Text style={styles.footer}>i: This image makes a sound when it receives focus and makes a different one when it loses it. If you don't hear the sound, check the system volume.</Text>
        </View>
    )
}

function API5() {
    const [label, setLabel] = useState("label")
    const [bellHasFocus, setBellFocus] = useState(false)
    const [hasId, setHasId] = useState("normal")


    let eventEmitterListener = useRef(null);
    useEffect(() => {
        AccessibilityRN.viewLabelFocused()

        const eventEmitter = new NativeEventEmitter(AccessibilityRN);
        eventEmitterListener.current = eventEmitter.addListener(
            'viewLabel',
            event => {
                const label = event.viewLabel

                if (label == "") {
                    setLabel('this view has no id')
                    setHasId("italic")
                } else {
                    setLabel(label)
                    setHasId("normal")
                }

                if (label == "bell") {
                    setBellFocus(true)
                } else {
                    setBellFocus(false)
                }
            },
        );

        return () => {
            eventEmitterListener.current.remove();
        };
    }, []);

    return (
        <>
            <View>
                <Image
                    accessible={true}
                    accessibilityLabel='bell'
                    source={require('./img/bell.png')}
                    style={styles.fork} />
            </View>

            <View style={styles.container}>
                <View style={styles.multipleText}>
                    <Text accessible={true} accessibilityLabel='Name of view with focus' style={styles.api} >Name of view with focus: </Text>
                    <Text accessible={true} accessibilityLabel='label' style={ [styles.api, { fontStyle:  hasId }] } >{label}</Text>
                </View>
                <View style={styles.multipleText}>
                    <Text accessible={true} accessibilityLabel='Does bell image have focus?' style={styles.api}>Does bell image have focus?</Text>
                    <Text accessible={true} accessibilityLabel='focus' style={styles.api, { fontSize: 20, color: bellHasFocus ? 'green' : 'red' }}>{bellHasFocus ? 'YES' : 'NO'}</Text>
                </View>
            </View>
        </>
    )
}

function API6() {
    const [value, onChangeText] = useState('')

    return (
        <>
            <View accessible={true}>
                <Image 
                    accessible={true} 
                    accessibilityLabel={value === '' ? 'This image has no description' : value} 
                    source={require('./img/fork.png')} 
                    style={styles.fork} />
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.api}>Image Alternative Text</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
        </>
    )
}

function API8() {
    const ref1 = React.useRef()
    const ref2 = React.useRef()

    useEffect(() => {
        AccessibilityRN.setLabelFor(findNodeHandle(ref1.current), findNodeHandle(ref2.current))
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            <Text accessibility={true} accessibilityLabel="Textfield Description" ref={ref1} style={styles.api, { alignSelf: 'center', marginBottom: 20 }}>Textfield Description</Text>
            <TextInput accessibility={true} accessibilityLabel="textInput" ref={ref2} style={styles.textInput} />

            <Text style={styles.footer}>i: The textfield is described by the text above it.</Text>
        </View>
    )
}

function API9() {
    const [counter, setCounter] = useState(0)

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            <Text accessibilityLiveRegion="polite" style={styles.counter}>{counter}</Text>
            <View>
                <Button title='increment' style={styles.button} onPress={() => { setCounter(counter + 1) }} />
            </View>
        </View>
    )
}

function API11() {
    const text = "The text to speech will be read by the screen reader."
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 40 }}>
            <View>
                <Text>{text}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Button title='Read the text above' style={styles.button} onPress={() => AccessibilityInfo.announceForAccessibility(text)} />
            </View>
        </View>
    )
}

function API14() {
    const textTTS = 'Text1: This is text number one'

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 50 }}>{textTTS}</Text>
            <View>
                <Button title='Read text1 with screen reader off' style={styles.button} onPress={() => Tts.speak(textTTS)} />
            </View>
            <Text style={styles.footer}>i: In case you don't hear the text read aloud, please check the system volume</Text>
        </View>
    )
}

function API17() {
    const textTTS = 'This is an example text.'
    const [rate, setrate] = useState(1)
    Tts.setDefaultRate(rate, true);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginBottom: 150 }} onPress={() => Tts.speak(textTTS, { rate: rate })}>
                <Text>{textTTS}</Text>
            </TouchableOpacity>

            <Text>Change The Reading Speed</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ marginTop: 10 }}>SLOW</Text>
                <Slider
                    accessibilityRole='adjustable'
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={2}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    value={rate}
                    onValueChange={value => setrate(value)}
                />
                <Text style={{ marginTop: 10 }}>FAST</Text>
            </View>
            <Text style={styles.footer}>i: To use the slider, press the volume up and the volume down buttons.</Text>
        </View>
    )
}

function API18() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
            <View accessible={true} style={{ alignItems: 'center', padding: 10 }}>
                <Text style={{ marginBottom: 100 }}>View number 1</Text>
                <Text style={{ marginBottom: 100 }}>View number 2</Text>
                <Text>This three different texts (views) have been grouped together, and will be handled by talkback as a single element.</Text>
            </View>
        </View>
    )
}

function API20() {
    const ref = React.useRef()

    return (
        <View accessible={true} accessibilityLabel="parentView" style={styles.container}>
            <Button accessible={true} ref={ref} title='set focus to parent' style={styles.button} onPress={() => { AccessibilityRN.setFocusToParentView(findNodeHandle(ref.current)) }} />
        </View>
    )
}

function API21() {
    const [screenReaderEnabled, setScreenReaderEnabled] = useState(false)

    useEffect(() => {
        AccessibilityInfo.addEventListener(
            "screenReaderChanged",
            handleScreenReaderToggled
        )
        AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled => {
            setScreenReaderEnabled(screenReaderEnabled)
        })
        return () => {
            AccessibilityInfo.removeEventListener(
                "screenReaderChanged",
                handleScreenReaderToggled
            )
        }
    }, [])

    const handleScreenReaderToggled = screenReaderEnabled => {
        setScreenReaderEnabled(screenReaderEnabled)
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20, fontSize: 20 }}>Is screen reader active?</Text>
            <Text style={{ fontSize: 20, color: screenReaderEnabled ? 'green' : 'red' }}>{screenReaderEnabled ? 'YES' : 'NO'}</Text>
        </View>
    )
}

function API22() {
    return (
        <View style={styles.container}>
            <Text accessibilityRole='header' style={styles.api} >This text is treated as a header</Text>
            <Text accessibilityRole='button' style={styles.api} >This text is treated as a button</Text>
            <Text accessibilityRole='image' style={styles.api} >This text is treated as an image</Text>
            <Text accessibilityRole='text' style={styles.api} >This is a normal text</Text>
        </View>
    )
}

function API23() {
    const [value, setValue] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')

    function action(event) {
        console.log(event.nativeEvent.actionName)
        switch (event.nativeEvent.actionName) {
            case 'activate':
                setBackgroundColor("#bb0000")
                setValue('activate')
                break
            case 'increment':
                setBackgroundColor("#bb0000")
                setValue('increment')
                break
            case 'decrement':
                setBackgroundColor("#bb0000")
                setValue('decrement')
                break
            case 'longpress':
                setBackgroundColor("#bb0000")
                setValue('longpress')
                break
        }
    }

    return (
        <View
            accessible={true}
            accessibilityRole="adjustable"
            accessibilityActions={[
                { name: 'activate', label: 'activate' },
                { name: 'increment', label: 'increment' },
                { name: 'decrement', label: 'decrement' },
            ]}
            onAccessibilityAction={(event) => action(event)}

            style={{ flex: 1, justifyContent: 'flex-start', padding: 20, backgroundColor: backgroundColor }}
        >

            <Text>Change background color with one of the following actions with the screen reader:</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'activate'  - Double tap with the screen reader.</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'increment' - Press the volume up button.</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'decrement' - Press the volume down button.</Text>
            <Text accessibilityLiveRegion="polite" style={{ marginTop: 100, fontSize: 25 }}>Action performed: {value}</Text>
        </View>
    )
}

function API24() {
    const [visibility, setVisibility] = useState('none')
    const ref = React.useRef()

    function changeVisibility() {
        if (visibility == 'none') {
            setVisibility('flex')
        } else {
            setVisibility('none')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View>
                    <View>
                        <Button accessible={true} title='click button 1' style={styles.button, { marginTop: 10 }} onPress={() => { AccessibilityRN.performAccessibilityAction(findNodeHandle(ref.current)) }} />
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Button accessible={true} ref={ref} title='button 1' style={styles.button} onPress={() => changeVisibility()} />
                        <Text accessible={true} style={styles.api, { display: visibility, marginTop: 10 }}>Button 1 clicked</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AtShowcase">
                <Stack.Screen
                    name="AtShowcase"
                    component={AtShowcase}
                    options={{
                        headerRight: () => (
                            <View style={styles.about_container}>
                                <TouchableOpacity style={styles.about_img} onPress={() => alert('This is a button!')}>
                                    <Image resizeMode={'contain'}  source={require('./img/about.png')}  style={styles.img}/>
                                </TouchableOpacity>  
                            </View>
                        ),
                    }}
                />

                <Stack.Screen name="API1" component={API1} />
                <Stack.Screen name="API2" component={API2} />
                <Stack.Screen name="API3" component={API3} />
                <Stack.Screen name="API4" component={API4} />
                <Stack.Screen name="API5" component={API5} />
                <Stack.Screen name="API6" component={API6} />
                <Stack.Screen name="API8" component={API8} />
                <Stack.Screen name="API9" component={API9} />
                <Stack.Screen name="API11" component={API11} />
                <Stack.Screen name="API14" component={API14} />
                <Stack.Screen name="API17" component={API17} />
                <Stack.Screen name="API18" component={API18} />
                <Stack.Screen name="API20" component={API20} />
                <Stack.Screen name="API21" component={API21} />
                <Stack.Screen name="API22" component={API22} />
                <Stack.Screen name="API23" component={API23} />
                <Stack.Screen name="API24" component={API24} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({
    about_container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems:'center',
    },
    about_img: {
        width:'50%',
        height: '50%',
        marginRight: 20
    },
    line: {
        marginHorizontal: 10,
        marginVertical: 1,
        zIndex: 200,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    header: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
    },
    api: {
        margin: 5,
        paddingHorizontal: 5,
    },
    not_aviable: {
        margin: 5,
        paddingHorizontal: 5,
        textDecorationLine: 'line-through',
        color: 'grey',
    },
    platform: {
        alignSelf: 'flex-end',
        color: 'grey',
        margin: 5,
        paddingHorizontal: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    switch: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
    },
    fork: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    bell: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        margin: 10,
    },
    counter: {
        fontSize: 50,
        alignSelf: 'center',
        marginBottom: 100
    },
    focusOrder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom: 50,
        paddingHorizontal: 20,
    },
    orderButton: {
        backgroundColor: '#FFFFFF',
        width: 40,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    position2: {
        marginTop: 60
    },
    position3: {
        marginTop: 120
    },
    position4: {
        marginTop: 180
    },
    footer: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20
    },
    textInput: {
        height: 40,
        margin: 10,
        borderWidth: 1.0
    },
    button: {
        width: '75%',
        alignSelf: 'center',
        margin: 10
    },
    img: {
        flex: 1,
        width: 100,
        height: 100,
        marginLeft: 10,
        marginRight: 20,
    },
    multipleText: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    increment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})