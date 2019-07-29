/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import Blocks from './blocks.jsx';
import Settings from './settings.jsx';

export default {
    blocks: {
        label: __( 'Blocks' ),
        block: Blocks,
    },
    settings: {
        label: __( 'Settings' ),
        block: Settings,
    },
};
