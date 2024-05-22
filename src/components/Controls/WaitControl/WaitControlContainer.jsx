import { Backdrop, CircularProgress } from "@mui/material";
import React from 'react';
import { ACTION } from './constant';
import eventManager from './eventManager';

export class WaitControlContainer extends React.Component {
    state = {
        waitList: [],
    };

    componentDidMount() {
        eventManager
            .on(ACTION.SHOW, () => this.show())
            .on(
                ACTION.CLEAR,
                () => (this.state.waitList.length > 0 ? this.remove() : this.clear()),
            )
            .emit(ACTION.DID_MOUNT, this);
    }

    componentWillUnmount() {
        eventManager
            .off(ACTION.SHOW)
            .off(ACTION.CLEAR)
            .emit(ACTION.WILL_UNMOUNT);
    }

    isWaitControlOpen = () => this.state.isOpen;

    remove() {
        const { waitList } = this.state;

        waitList.splice(0, 1);

        this.setState({
            waitList,
        });
    }
    dispatchChange() {
        eventManager.emit(ACTION.ON_CHANGE, this.state.toast.length);
    }

    show = () => {
        const { waitList } = this.state;
        waitList.push(true);
        this.setState({
            waitList,
        });
    };

    isOpen = () => {
        const { waitList } = this.state;
        return waitList.length > 0;
    };

    clear() {
        this.setState({
            isOpen: false,
        });
    }

    render() {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={this.isOpen()}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }
}

export default WaitControlContainer;
