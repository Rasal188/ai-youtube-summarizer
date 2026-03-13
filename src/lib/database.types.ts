export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            memory_logs: {
                Row: {
                    id: string
                    user_id: string
                    video_url: string
                    video_title: string
                    summary: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    video_url: string
                    video_title: string
                    summary?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    video_url?: string
                    video_title?: string
                    summary?: string | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "memory_logs_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            extracted_data: {
                Row: {
                    id: string
                    user_id: string
                    video_url: string
                    key_points: Json | null
                    takeaways: Json | null
                    topics: Json | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    video_url: string
                    key_points?: Json | null
                    takeaways?: Json | null
                    topics?: Json | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    video_url?: string
                    key_points?: Json | null
                    takeaways?: Json | null
                    topics?: Json | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "extracted_data_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            network_search: {
                Row: {
                    id: string
                    user_id: string
                    video_url: string
                    related_videos: Json | null
                    related_articles: Json | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    video_url: string
                    related_videos?: Json | null
                    related_articles?: Json | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    video_url?: string
                    related_videos?: Json | null
                    related_articles?: Json | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "network_search_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            user_config: {
                Row: {
                    id: string
                    user_id: string
                    summary_style: string | null
                    summary_length: string | null
                    theme: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    summary_style?: string | null
                    summary_length?: string | null
                    theme?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    summary_style?: string | null
                    summary_length?: string | null
                    theme?: string | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_config_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            summaries: {
                Row: {
                    id: string
                    user_id: string
                    video_url: string
                    video_title: string
                    summary: string | null
                    notes: string | null
                    key_takeaways: Json | null
                    timestamp_highlights: Json | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    video_url: string
                    video_title: string
                    summary?: string | null
                    notes?: string | null
                    key_takeaways?: Json | null
                    timestamp_highlights?: Json | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    video_url?: string
                    video_title?: string
                    summary?: string | null
                    notes?: string | null
                    key_takeaways?: Json | null
                    timestamp_highlights?: Json | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "summaries_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
    }
}
