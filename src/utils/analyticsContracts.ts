export type AnalyticsEvents = {
    navigation_click: { target_section: string; menu_type: 'desktop' | 'mobile'; context: string };
    language_change: { current_lang: 'pt' | 'en'; previous_lang: 'pt' | 'en'; context: string };
    download_cv: { file_name: string; location: string; context: string };
    contact_form_submit: { status: 'success' | 'error'; form_id: string; context: string };
    social_click: { platform: 'github' | 'linkedin' | 'whatsapp' | 'e-mail'; context: string };
    project_selection: { selection: 'todos' | 'fullstack' | 'frontend' | 'marketing'; context: string };
};

export type EventName = keyof AnalyticsEvents;