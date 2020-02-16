import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { loadData } from './actions';

export const Button = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(loadData());

    return (
        <TouchableOpacity onPress={onClick} style={{backgroundColor:'yellow', width: 100, height: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Click me</Text>
        </TouchableOpacity>
    )
}