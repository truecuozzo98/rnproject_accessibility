// In App.js in a new project

import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Button, TouchableWithoutFeedback, TouchableOpacity, Alert, TextInput, findNodeHandle, AccessibilityInfo, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import FocusOrder from './FocusOrder';
import AccessibilityFocus from './AccessibilityFocus';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Picker } from '@react-native-community/picker';
import AccessibilityService from './AccessibilityService';
import { NativeEventEmitter, NativeModules } from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Text accessibilityRole='header' style={styles.header}>Accessibility Focus</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api1') }}>
                        <Text style={[styles.api, styles.greenText]}>Specify which views should receive the accessibility focus</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api2') }}>
                        <Text style={[styles.api, styles.greenText]}>Specify the accessibility focus order</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api3') }}>
                        <Text style={[styles.api, styles.greenText]}>Assign the accessibility focus to a view</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api4') }}>
                        <Text style={[styles.api, styles.greenText]}>Specify actions associated to accessibility focus-related events (e.g., a view acquires or loses the focus)</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api5') }}>
                        <Text style={[styles.api, styles.greenText]}>Determine whether a view has the accessibility focus or which view has the accessibility focus</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Text to Announce</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api6') }}>
                        <Text style={[styles.api, styles.greenText]}>Specify attributes that contribute to form the text-to-announce</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api7') }}>
                        <Text style={[styles.api, styles.greenText]}>Programmatically define the text-to-announce</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api8') }}>
                        <Text style={[styles.api, styles.greenText]}>Use one view to describe another one</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api9') }}>
                        <Text style={[styles.api, styles.greenText]}>Specify that a view should be announced when changed, even without user interaction</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api10') }}>
                        <Text style={styles.api}>Specify in which language the text-to-announce should be read</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Explicit TTS</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api11') }}>
                        <Text style={[styles.api, styles.greenText]}>Read a text with the screen-reader TTS</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api12') }}>
                        <Text style={styles.api}>Be informed when the screen-reader finishes reading an explicitly provided text</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api13') }}>
                        <Text style={styles.api}>Customize screen-reader TTS speech features, like pitch, speed, etc...</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api14') }}>
                        <Text style={[styles.api, styles.greenText]}>Read a text with non-screen-reader TTS (also works when screen-reader is not active)</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api15') }}>
                        <Text style={[styles.api]}>Detect whether the non-screen-reader TTS is reading</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api16') }}>
                        <Text style={styles.api}>Pause the non-screen-reader TTS</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api17') }}>
                        <Text style={[styles.api, styles.greenText]}>Customize non-screen-reader TTS speech features, like pitch, speed, etc...</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Accessibility Tree</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api18') }}>
                        <Text style={[styles.api, styles.greenText]}>Aggregate multiple views into a single accessible element</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api19') }}>
                        <Text style={styles.api}>Decompose a view into multiple accessibility elements</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api20') }}>
                        <Text style={[styles.api, styles.greenText]}>Get the parent accessible element</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text accessibilityRole='header' style={styles.header}>Miscellaneous</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api21') }}>
                        <Text style={[styles.api, styles.greenText]}>Detect whether screen-reader is active</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api22') }}>
                        <Text style={[styles.api, styles.greenText]}>Support navigation by specifying which views are headers or panes</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api23') }}>
                        <Text style={[styles.api, styles.greenText]}>Define how to respond to user actions that are only available when the screen reader is active</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api24') }}>
                        <Text style={[styles.api, styles.greenText]}>Perform actions on user behalf</Text>
                        <View style={styles.line} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF' }} accessible={true} onPress={() => { navigation.navigate('Api25') }}>
                        <Text style={[styles.api]}>Associate arbitrary accessibility-related information to a view</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

function Api1() {
    const [accessible, setAccessible] = useState(true)
    const [text, setText] = useState('Above Image Is Accessible')

    function setForkAccessibility() {
        if (accessible) {
            setAccessible(false)
            setText('Above Image Is Not Accessible')
        } else {
            setAccessible(true)
            setText('Above Image Is Accessible')
        }
    }

    return (
        <>
            <View>
                <Image
                    accessible={accessible}
                    accessibilityLabel='this is the image of a fork'
                    importantForAccessibility={accessible ? "yes" : "no-hide-descendants"}
                    source={require('./img/fork.png')}
                    style={styles.fork} />
            </View>

            <View style={styles.switch}>
                <Text>{text}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={accessible ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setForkAccessibility}
                    value={accessible}
                />
            </View>
        </>
    )
}

function Api2() {
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
        </>
    )
}

function Api3() {
    const ref = React.useRef()

    const changeFocus = () => {
        const tag = findNodeHandle(ref.current)
        AccessibilityInfo.setAccessibilityFocus(tag)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity ref={ref} accessible={true} style={{ marginBottom: 20 }}>
                <Text>Generic view</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                <Button title='assign focus to generic view' onPress={changeFocus} />
            </View>
        </View>
    )
}

function Api4() {
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

            <Text style={styles.footer}>i: This image makes a sound when it receives focus and makes a different one when it loses it.</Text>
        </View>
    )
}

function Api5() {
    const [label, setLabel] = useState("label")
    const [bellHasFocus, setBellFocus] = useState(false)

    let eventEmitterListener = useRef(null);

    useEffect(() => {
        const eventEmitter = new NativeEventEmitter(AccessibilityService);
        eventEmitterListener.current = eventEmitter.addListener(
            'viewLabel',
            event => {
                const label = event['viewLabel']
                console.log('event', event);

                setLabel(label)

                if (label == 'bell') {
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
                    <Text accessible={true} accessibilityLabel='name' style={styles.api} >Name of view with focus: </Text>
                    <Text accessible={true} accessibilityLabel='label' style={styles.api} >{label}</Text>
                </View>
                <View style={styles.multipleText}>
                    <Text accessible={true} accessibilityLabel='has_focus' style={styles.api}>Does Bell Image have the focus?</Text>
                    <Text accessible={true} accessibilityLabel='focus' style={styles.api, { fontSize: 20, color: bellHasFocus ? 'green' : 'red' }}>{bellHasFocus ? 'YES' : 'NO'}</Text>
                </View>
            </View>
        </>
    )
}

function Api6() {
    const [value, onChangeText] = useState('')

    return (
        <>
            <View accessible={true}>
                <Image accessible={true} accessibilityLabel={value === '' ? 'This image has no description' : value} source={require('./img/fork.png')} style={styles.fork} />
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

function Api7() {
    const [value1, onChangeText1] = useState('')
    const [value2, onChangeText2] = useState('')
    const [editable, setEditable] = useState(true)

    let eventEmitterListener = useRef(null);

    useEffect(() => {
        const eventEmitter = new NativeEventEmitter(AccessibilityService);
        eventEmitterListener.current = eventEmitter.addListener(
            'viewLabel',
            event => {
                console.log("value1", value1)
                if (value1 == "") {
                    console.log("if")
                    AccessibilityService.defineTextToAnnounce("inputText1", "Textfield 1 Description")
                } else {
                    console.log("else")
                    AccessibilityService.defineTextToAnnounce("inputText1", "Textfield 1 Description " + value1)
                }

                setEditable(true)
                console.log(editable)

            },
        );

        return () => {
            eventEmitterListener.current.remove();
        };
    }, []);

    //AccessibilityService.defineTextToAnnounce("inputText1", (value1 == "") ? "Textfield 1 Description" : value1)
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
            <View>
                <Text accessibilityLabel="Textfield 1 Description" style={styles.api} >Textfield 1 Description</Text>
                <TextInput
                    accessibilityLabel="inputText1"
                    style={styles.textInput}
                    editable={editable}
                    onChangeText={text => 
                            onChangeText1(text)
                            /*if (text == "") {
                                console.log("if")
                                AccessibilityService.defineTextToAnnounce("inputText1", "Textfield 1 Description")
                            } else {
                                console.log("else")
                                AccessibilityService.defineTextToAnnounce("inputText1", text)
                            }*/
                        
                    }
                    value={value1}
                />
            </View>

            <View>
                <Text accessibilityLabel="Textfield 2 Description" style={styles.api}>Textfield 2 Description</Text>
                <TextInput
                    accessibilityLabel={"inputText2"}
                    style={styles.textInput}
                    onChangeText={text => {
                            onChangeText2(text)
                            if (text == "") {
                                console.log("if")
                                AccessibilityService.defineTextToAnnounce("inputText2", "Textfield 2 Description")
                            } else {
                                console.log("else")
                                AccessibilityService.defineTextToAnnounce("inputText2", "Textfield 2 Description " + text)
                            }
                        }
                    }
                    
                        
                    value={value2}
                />
            </View>
        </View>
    )
}

/*
function Api7() {
    const [value1, onChangeText1] = useState('')
    const [value2, onChangeText2] = useState('')

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
            <View>
                <Text style={styles.api} >Textfield 1 Description</Text>
                <TextInput
                    accessibilityLabel={value1 === '' ? 'Textfield 1 Description' : value1}
                    style={styles.textInput}
                    onChangeText={text => onChangeText1(text)}
                //value={value1}
                />
            </View>

            <View>
                <Text style={styles.api}>Textfield 2 Description</Text>
                <TextInput
                    accessibilityLabel={value1 === '' ? 'Textfield 2 Description' : 'Textfield 2 Description'.concat(value2)}
                    style={styles.textInput}
                    onChangeText={text => onChangeText2(text)}
                //value={value2}
                />
            </View>
        </View>
    )
}
*/

function Api8() {
    let eventEmitterListener = useRef(null);

    useEffect(() => {
        const eventEmitter = new NativeEventEmitter(AccessibilityService);
        eventEmitterListener.current = eventEmitter.addListener(
            'viewLabel',
            event => {
                AccessibilityService.setLabelFor("Textfield Description", "textInput")
            },
        );

        return () => {
            eventEmitterListener.current.remove();
        };
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            <Text accessibility={true} accessibilityLabel="Textfield Description" style={styles.api, { alignSelf: 'center', marginBottom: 20 }}>Textfield Description</Text>
            <TextInput accessibility={true} accessibilityLabel="textInput" style={styles.textInput} />
        </View>
    )
}

/*function Api8() {
  const label = 'Textfield Description'

  return(
    <View style={{flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
      <Text style={styles.api, {alignSelf: 'center', marginBottom: 20}}>{label}</Text>
      <TextInput style={styles.textInput} accessibilityLabel={label}/>
    </View>
  )
}*/

function Api9() {
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

function Api10() {
    return (
        <>
            <Text>10</Text>
        </>
    )
}

function Api11() {
    const text = "Touch on this text to read it with the screen reader.\nThe text to speech will be read by the screen reader."
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 40 }}>
            <TouchableWithoutFeedback onPress={() => AccessibilityInfo.announceForAccessibility(text)} >
                <Text>{text}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

function Api12() {
    return (
        <>
            <Text>12</Text>
        </>
    )
}

function Api13() {
    return (
        <>
            <Text>13</Text>
        </>
    )
}

function Api14() {
    const textTTS = 'Text1: This is text number one'

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 50 }}>{textTTS}</Text>
            <View>
                <Button title='Read text1 with screen reader off' style={styles.button} onPress={() => Tts.speak(textTTS)} />
            </View>
        </View>
    )
}

function Api15() {
    return (
        <>
            <Text>15</Text>
        </>
    )
}

/*function Api15() {
  const textTTS1 = 'Text1: This is text number one'
  const textTTS2 = 'Text2: This is text number two'

  function interrupt(text) {
      Speech.isSpeakingAsync().then((successMessage) => {
        console.log(successMessage)
        if (successMessage) {
          Speech.stop()
        } 
        Speech.speak(text)
      })
  }

  return(
    <>
      <View style={styles.container}>
        <View>
          <Text>{textTTS1}</Text>
          <View>
            <Button title='Read text1 with screen reader off' style={styles.button} onPress={() => Speech.speak(textTTS1) } />
          </View>
        </View>

        <View style={{marginTop: 50}}>
          <Text>{textTTS2}</Text>
          <View>
            <Button title='Read text 2' style={styles.button} onPress={() => {interrupt(textTTS2)} } />
            <Button title='Read text 2 without overlap' style={styles.button} onPress={() => Speech.speak(textTTS2) } />
          </View>
        </View>   
      </View>
    </>
  )
}*/

function Api16() {
    return (
        <>
            <Text>16</Text>
        </>
    )
}

function Api17() {
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
        </View>
    )
}

function Api18() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
            <View accessible={true} style={{ alignItems: 'center', padding: 10 }}>
                <Text style={{ marginBottom: 100 }}>View number 1</Text>
                <Text style={{ marginBottom: 100 }}>View number 2</Text>
                <Text>This three different texts (views) have been grouped together, and will be seen as a single element.</Text>
            </View>
        </View>
    )
}

function Api19() {
    return (
        <>
            <Text>19</Text>
        </>
    )
}

function Api20() {
    return (
        <View accessible={true} accessibilityLabel="parentView" style={styles.container}>
            <Button accessible={true} accessibilityLabel='button' title='set focus to parent' style={styles.button} onPress={() => { AccessibilityService.setFocusToParentView('button') }} />
        </View>
    )
}

function Api21() {
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

function Api22() {
    return (
        <View style={styles.container}>
            <Text accessibilityRole='header' style={styles.api} >This text is treated as a header</Text>
            <Text accessibilityRole='button' style={styles.api} >This text is treated as a button</Text>
            <Text accessibilityRole='image' style={styles.api} >This text is treated as an image</Text>
            <Text accessibilityRole='text' style={styles.api} >This is a normal text</Text>
        </View>
    )
}

function Api23() {
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
                //{ name: 'longpress', label: 'longpress' }
            ]}
            onAccessibilityAction={(event) => action(event)}

            style={{ flex: 1, justifyContent: 'flex-start', padding: 20, backgroundColor: backgroundColor }}
        >

            <Text>Change background color with one of the following actions with the screen reader:</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'activate'  - Double tap with the screen reader.</Text>
            {/* <Text style={{marginTop: 10, marginLeft: 10}}>'longpress' - Double tap and holds one finger on the screen.</Text> */}
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'increment' - Press the volume up button.</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>'decrement' - Press the volume down button.</Text>
            <Text style={{ marginTop: 100, fontSize: 25 }}>Action performed: {value}</Text>
        </View>
    )
}

function Api24() {
    const [visibility, setVisibility] = useState('none')
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
                        <Button accessible={true} accessibilityLabel='b1' title='click button 1' style={styles.button, { marginTop: 10 }} onPress={() => { AccessibilityService.performAction('b2') }} />
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Button accessible={true} accessibilityLabel='b2' title='button 1' style={styles.button} onPress={() => changeVisibility()} />
                        <Text accessible={true} style={styles.api, { display: visibility, marginTop: 10 }}>Button 1 clicked</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

function Api25() {
    const [forkLabel, setForkLabel] = useState('fork')

    return (
        <View style={{ justifyContent: 'center', marginHorizontal: 30 }}>
            <Image accessible={true} accessibilityLabel={forkLabel} source={require('./img/fork.png')} style={styles.fork} />
            <Button title='get more info' style={styles.button} onPress={() => setForkLabel("metal fork")} />
        </View>
    )
}

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Api1" component={Api1} />
                <Stack.Screen name="Api2" component={Api2} />
                <Stack.Screen name="Api3" component={Api3} />
                <Stack.Screen name="Api4" component={Api4} />
                <Stack.Screen name="Api5" component={Api5} />
                <Stack.Screen name="Api6" component={Api6} />
                <Stack.Screen name="Api7" component={Api7} />
                <Stack.Screen name="Api8" component={Api8} />
                <Stack.Screen name="Api9" component={Api9} />
                <Stack.Screen name="Api10" component={Api10} />
                <Stack.Screen name="Api11" component={Api11} />
                <Stack.Screen name="Api12" component={Api12} />
                <Stack.Screen name="Api13" component={Api13} />
                <Stack.Screen name="Api14" component={Api14} />
                <Stack.Screen name="Api15" component={Api15} />
                <Stack.Screen name="Api16" component={Api16} />
                <Stack.Screen name="Api17" component={Api17} />
                <Stack.Screen name="Api18" component={Api18} />
                <Stack.Screen name="Api19" component={Api19} />
                <Stack.Screen name="Api20" component={Api20} />
                <Stack.Screen name="Api21" component={Api21} />
                <Stack.Screen name="Api22" component={Api22} />
                <Stack.Screen name="Api23" component={Api23} />
                <Stack.Screen name="Api24" component={Api24} />
                <Stack.Screen name="Api25" component={Api25} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App


const styles = StyleSheet.create({
    line: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
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
    greenText: {
        color: 'green'
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
    subtitle: {
        fontSize: 20,
        marginTop: 10
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