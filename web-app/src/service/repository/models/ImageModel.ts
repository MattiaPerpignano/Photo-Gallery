export interface GalleryBody {
    kind: string;
    data: Data;
}

interface Data {
    after: string;
    dist: number;
    modhash: string;
    geo_filter: string;
    children: Child[];
    before?: any;
}

interface Child {
    kind: string;
    data: ImageData;
}

interface ImageData {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname?: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: any[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class?: any;
    downs: number;
    thumbnail_height?: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: Mediaembed;
    thumbnail_width?: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: Securemedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: Securemediaembed;
    link_flair_text?: any;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    is_created_from_ads_ui: boolean;
    author_premium?: boolean;
    thumbnail: string;
    edited: boolean;
    author_flair_css_class?: any;
    author_flair_richtext?: any[];
    gildings: Gildings;
    post_hint?: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type?: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: string;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    url_overridden_by_dest?: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview?: Preview;
    all_awardings: any[];
    awarders: any[];
    media_only: boolean;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: any;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    author_is_blocked: boolean;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair?: boolean;
    author_flair_text_color?: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: Securemedia;
    is_video: boolean;
    is_gallery?: boolean;
    // media_metadata?: Mediametadata;
    gallery_data?: Gallerydata;
}

interface Gallerydata {
    items: Item[];
}

interface Item {
    caption?: string;
    media_id: string;
    id: number;
}

// interface Mediametadata {
//     w92514a3ao3a1?: W92514a3ao3a1;
//     gt0yjb83ao3a1?: W92514a3ao3a1;
//     '7xmbfc83ao3a1'?: W92514a3ao3a1;
//     lnokao09jk3a1?: W92514a3ao3a1;
//     '05g1jou9jk3a1'?: W92514a3ao3a1;
//     uxdg72900j3a1?: W92514a3ao3a1;
//     jtwm33900j3a1?: W92514a3ao3a1;
//     tybjekyy2m3a1?: W92514a3ao3a1;
//     '8hx5fd3z2m3a1'?: W92514a3ao3a1;
//     '3ouy2y0z2m3a1'?: W92514a3ao3a1;
//     '93xpeo4z2m3a1'?: W92514a3ao3a1;
//     tacxpt6z2m3a1?: W92514a3ao3a1;
//     '2v675i5z2m3a1'?: W92514a3ao3a1;
//     ya35992z2m3a1?: W92514a3ao3a1;
//     sjvl9bdg7p3a1?: W92514a3ao3a1;
//     h6qaj9dg7p3a1?: W92514a3ao3a1;
// }

// interface W92514a3ao3a1 {
//     status: string;
//     e: string;
//     m: string;
//     p: P[];
//     s: P;
//     id: string;
// }

interface P {
    y: number;
    x: number;
    u: string;
}

interface Preview {
    images: Image[];
    enabled: boolean;
}

interface Image {
    source: Source;
    resolutions: Source[];
    variants: Gildings;
    id: string;
}

interface Source {
    url: string;
    width: number;
    height: number;
}

interface Gildings {
}

interface Securemediaembed {
    content?: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url?: string;
    height?: number;
}

interface Securemedia {
    reddit_video?: Redditvideo;
    type?: string;
    oembed?: Oembed;
}

interface Oembed {
    provider_url: string;
    version: string;
    title: string;
    type: string;
    thumbnail_width: number;
    height: number;
    width: number;
    html: string;
    author_name: string;
    provider_name: string;
    thumbnail_url: string;
    thumbnail_height: number;
    author_url: string;
}

interface Redditvideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

interface Mediaembed {
    content?: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}