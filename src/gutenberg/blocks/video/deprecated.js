/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * Internal dependencies
 */
import fixXmlImportedContent from '../../utils/fix-xml-imported-content';

import metadata from './block.json';
import save from './save';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const {
    applyFilters,
} = wp.hooks;

export default [
    // v2.10.2
    {
        ...metadata,
        ghostkit: {
            supports: {
                styles: true,
                frame: true,
                spacings: true,
                display: true,
                scrollReveal: true,
                customCSS: true,
            },
        },
        attributes: {
            type: {
                type: 'string',
                default: 'yt_vm_video',
            },
            video: {
                type: 'string',
                default: '',
            },
            videoPosterPreview: {
                type: 'string',
                default: '',
            },
            videoMp4: {
                type: 'string',
                default: '',
            },
            videoMp4Id: {
                type: 'number',
            },
            videoOgv: {
                type: 'string',
                default: '',
            },
            videoOgvId: {
                type: 'number',
            },
            videoWebm: {
                type: 'string',
                default: '',
            },
            videoWebmId: {
                type: 'number',
            },
            videoAspectRatio: {
                type: 'string',
                default: '16:9',
            },
            videoVolume: {
                type: 'number',
                default: 100,
            },
            videoAutoplay: {
                type: 'boolean',
                default: false,
            },
            videoAutopause: {
                type: 'boolean',
                default: false,
            },

            iconPlay: {
                type: 'string',
                default: '<svg class="ghostkit-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.83167C5 4.0405 5.87525 3.56266 6.54076 3.99049L17.6915 11.1588C18.3038 11.5525 18.3038 12.4475 17.6915 12.8412L6.54076 20.0095C5.87525 20.4373 5 19.9595 5 19.1683V4.83167Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            },
            iconLoading: {
                type: 'string',
                default: '<span class="ghostkit-svg-icon ghostkit-icon-spinner"></span>',
            },

            poster: {
                type: 'number',
                default: '',
            },
            posterTag: {
                type: 'string',
                default: '',
            },
            posterSizes: {
                type: 'object',
                default: '',
            },
            posterSize: {
                type: 'string',
                default: 'full',
            },

            clickAction: {
                type: 'string',
                default: 'plain',
            },
            fullscreenBackgroundColor: {
                type: 'string',
                default: 'rgba(0, 0, 0, .9)',
            },
            fullscreenActionCloseIcon: {
                type: 'string',
                default: '<svg class="ghostkit-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L12 10.9393L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L13.0607 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L12 13.0607L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L10.9393 12L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="currentColor"/></svg>',
            },
        },
        save,
    },

    // v2.8.2
    {
        ghostkit: {
            supports: {
                styles: true,
                frame: true,
                spacings: true,
                display: true,
                scrollReveal: true,
                customCSS: true,
            },
        },
        supports: metadata.supports,
        attributes: {
            ...metadata.attributes,
            iconPlay: {
                type: 'string',
                default: 'fas fa-play',
            },
            iconLoading: {
                type: 'string',
                default: 'ghostkit-video-spinner',
            },
            fullscreenActionCloseIcon: {
                type: 'string',
                default: 'fas fa-times',
            },
        },
        save,
    },

    // v1.6.3
    {
        ghostkit: {
            previewUrl: 'https://ghostkit.io/blocks/video/',
            supports: {
                styles: true,
                spacings: true,
                display: true,
                scrollReveal: true,
            },
        },
        supports: {
            html: false,
            className: false,
            anchor: true,
            align: [ 'wide', 'full' ],
        },
        attributes: {
            type: {
                type: 'string',
                default: 'yt_vm_video',
            },
            video: {
                type: 'string',
                default: '',
            },
            videoPosterPreview: {
                type: 'string',
                default: '',
            },
            videoMp4: {
                type: 'string',
                default: '',
            },
            videoOgv: {
                type: 'string',
                default: '',
            },
            videoWebm: {
                type: 'string',
                default: '',
            },
            videoAspectRatio: {
                type: 'string',
                default: '16:9',
            },
            videoVolume: {
                type: 'number',
                default: 100,
            },
            videoAutoplay: {
                type: 'boolean',
                default: false,
            },
            videoAutopause: {
                type: 'boolean',
                default: false,
            },

            iconPlay: {
                type: 'string',
                default: 'fas fa-play',
            },
            iconLoading: {
                type: 'string',
                default: 'ghostkit-video-spinner',
            },

            poster: {
                type: 'number',
                default: '',
            },
            posterTag: {
                type: 'string',
                default: '',
            },
            posterSizes: {
                type: 'object',
                default: '',
            },
            posterSize: {
                type: 'string',
                default: 'full',
            },

            clickAction: {
                type: 'string',
                default: 'plain',
            },
            fullscreenBackgroundColor: {
                type: 'string',
                default: 'rgba(0, 0, 0, .9)',
            },
            fullscreenActionCloseIcon: {
                type: 'string',
                default: 'fas fa-times',
            },
        },
        save: class VideoBlockSave extends Component {
            constructor( props ) {
                super( props );

                // fix xml imported string.
                this.props.attributes.posterTag = fixXmlImportedContent( this.props.attributes.posterTag );
            }

            render() {
                const {
                    attributes,
                } = this.props;

                const {
                    type,
                    video,
                    videoMp4,
                    videoOgv,
                    videoWebm,
                    videoAspectRatio,
                    videoVolume,
                    videoAutoplay,
                    videoAutopause,

                    iconPlay,
                    iconLoading,

                    posterTag,

                    clickAction,
                    fullscreenActionCloseIcon,
                    fullscreenBackgroundColor,
                } = attributes;

                const resultAttrs = {};

                resultAttrs.className = 'ghostkit-video';

                resultAttrs.className = applyFilters( 'ghostkit.blocks.className', resultAttrs.className, {
                    ...{
                        name: 'ghostkit/video',
                    },
                    ...this.props,
                } );

                resultAttrs[ 'data-video-type' ] = type;

                resultAttrs[ 'data-video' ] = '';
                if ( 'video' === type ) {
                    if ( videoMp4 ) {
                        resultAttrs[ 'data-video' ] += `mp4:${ videoMp4 }`;
                    }
                    if ( videoOgv ) {
                        resultAttrs[ 'data-video' ] += `${ resultAttrs[ 'data-video' ].length ? ',' : '' }ogv:${ videoOgv }`;
                    }
                    if ( videoWebm ) {
                        resultAttrs[ 'data-video' ] += `${ resultAttrs[ 'data-video' ].length ? ',' : '' }webm:${ videoWebm }`;
                    }
                } else {
                    resultAttrs[ 'data-video' ] = video;
                }

                resultAttrs[ 'data-video-aspect-ratio' ] = videoAspectRatio;

                resultAttrs[ 'data-video-volume' ] = videoVolume;

                resultAttrs[ 'data-click-action' ] = clickAction;

                if ( 'fullscreen' === clickAction ) {
                    resultAttrs[ 'data-fullscreen-action-close-icon' ] = fullscreenActionCloseIcon;
                    resultAttrs[ 'data-fullscreen-background-color' ] = fullscreenBackgroundColor;
                } else {
                    if ( videoAutoplay ) {
                        resultAttrs[ 'data-video-autoplay' ] = 'true';
                    }
                    if ( videoAutopause ) {
                        resultAttrs[ 'data-video-autopause' ] = 'true';
                    }
                }

                return (
                    <div { ...resultAttrs }>
                        { posterTag ? (
                            <div
                                className="ghostkit-video-poster"
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={ {
                                    __html: posterTag,
                                } }
                            />
                        ) : '' }
                        { iconPlay ? (
                            <div className="ghostkit-video-play-icon">
                                <span className={ iconPlay } />
                            </div>
                        ) : '' }
                        { iconLoading ? (
                            <div className="ghostkit-video-loading-icon">
                                <span className={ iconLoading } />
                            </div>
                        ) : '' }
                    </div>
                );
            }
        },
    },

    // v1.0.0
    {
        ghostkit: {
            supports: {
                styles: true,
                spacings: true,
                display: true,
                scrollReveal: true,
            },
        },
        supports: {
            html: false,
            className: false,
            align: [ 'wide', 'full' ],
        },
        attributes: {
            type: {
                type: 'string',
                default: 'yt_vm_video',
            },
            video: {
                type: 'string',
                default: '',
            },
            videoPosterPreview: {
                type: 'string',
                default: '',
            },
            videoMp4: {
                type: 'string',
                default: '',
            },
            videoOgv: {
                type: 'string',
                default: '',
            },
            videoWebm: {
                type: 'string',
                default: '',
            },
            videoAspectRatio: {
                type: 'string',
                default: '16-9',
            },
            videoVolume: {
                type: 'number',
                default: 100,
            },

            iconPlay: {
                type: 'string',
                default: 'fas fa-play',
            },
            iconLoading: {
                type: 'string',
                default: 'ghostkit-video-spinner',
            },

            poster: {
                type: 'string',
                default: '',
            },
            posterTag: {
                type: 'string',
                default: '',
            },
            posterSizes: {
                type: 'object',
                default: '',
            },
            posterSize: {
                type: 'string',
                default: 'full',
            },
        },
        save( props ) {
            const {
                type,
                video,
                videoMp4,
                videoOgv,
                videoWebm,
                videoAspectRatio,
                videoVolume,
                iconPlay,
                iconLoading,

                posterTag,
            } = props.attributes;

            const resultAttrs = {};

            resultAttrs.className = classnames(
                'ghostkit-video',
                `ghostkit-video-aspect-ratio-${ videoAspectRatio }`,
                props.className
            );

            resultAttrs.className = applyFilters( 'ghostkit.blocks.className', resultAttrs.className, props );

            resultAttrs[ 'data-video-type' ] = type;

            resultAttrs[ 'data-video' ] = '';
            if ( 'video' === type ) {
                if ( videoMp4 ) {
                    resultAttrs[ 'data-video' ] += `mp4:${ videoMp4 }`;
                }
                if ( videoOgv ) {
                    resultAttrs[ 'data-video' ] += `${ resultAttrs[ 'data-video' ].length ? ',' : '' }ogv:${ videoOgv }`;
                }
                if ( videoWebm ) {
                    resultAttrs[ 'data-video' ] += `${ resultAttrs[ 'data-video' ].length ? ',' : '' }webm:${ videoWebm }`;
                }
            } else {
                resultAttrs[ 'data-video' ] = video;
            }

            resultAttrs[ 'data-video-volume' ] = videoVolume;

            return (
                <div { ...resultAttrs }>
                    { posterTag ? (
                        <div
                            className="ghostkit-video-poster"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={ {
                                __html: posterTag,
                            } }
                        />
                    ) : '' }
                    { iconPlay ? (
                        <div className="ghostkit-video-play-icon">
                            <span className={ iconPlay } />
                        </div>
                    ) : '' }
                    { iconLoading ? (
                        <div className="ghostkit-video-loading-icon">
                            <span className={ iconLoading } />
                        </div>
                    ) : '' }
                </div>
            );
        },
    },
];
