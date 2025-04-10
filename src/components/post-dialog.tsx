"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ExternalLinkIcon, Share2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostDialogProps {
  title: string;
  url: string;
  date?: string;
  id: string;
}

export function PostDialog({ title, url, date, id }: PostDialogProps) {
  const [open, setOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Check if this post should be opened based on URL parameters
  useEffect(() => {
    const postParam = searchParams.get('post');
    if (postParam === id) {
      setOpen(true);
    }
  }, [searchParams, id]);
  
  // Update the URL when the dialog state changes
  useEffect(() => {
    if (open) {
      // Update URL with the post ID without a full page reload
      window.history.pushState({}, '', `?post=${id}`);
    } else if (searchParams.get('post') === id) {
      // Remove the post parameter when closing
      window.history.pushState({}, '', window.location.pathname);
    }
  }, [open, id, searchParams]);
  
  // Function to copy the shareable link
  const copyShareableLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableUrl = `${baseUrl}?post=${id}`;
    navigator.clipboard.writeText(shareableUrl);
    alert('Link copied to clipboard!');
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer transition-all hover:scale-105">
          <Card className="flex h-full flex-col overflow-hidden border border-muted p-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  {date && (
                    <div className="mt-1 text-xs tabular-nums text-muted-foreground">
                      {date}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 p-0" 
                    onClick={copyShareableLink}
                    title="Copy shareable link"
                  >
                    <Share2Icon className="h-4 w-4 text-muted-foreground/70" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px] h-[90vh] p-0 overflow-hidden [&>button]:hidden bg-background">
        {/* Visually hidden title for accessibility */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {iframeLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="text-muted-foreground animate-pulse">Loading content...</div>
          </div>
        )}
        <iframe
          src={url}
          className="w-full h-full border-none bg-background"
          title={title}
          loading="lazy"
          onLoad={() => setIframeLoading(false)}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </DialogContent>
    </Dialog>
  );
}
