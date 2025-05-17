"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioTower, Volume2, VolumeX, AlertTriangle, Power, PowerOff } from "lucide-react";
import * as Tone from 'tone';

export function SOSBeaconClient() {
  const [isBeaconActive, setIsBeaconActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const flashRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<Tone.Synth | null>(null); // Using Synth for pulsed sound
  const [audioInitialized, setAudioInitialized] = useState(false);

  const initializeAudio = async () => {
    if (!audioInitialized) {
      await Tone.start(); 
      synthRef.current = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.3 }
      }).toDestination();
      setAudioInitialized(true);
    }
  };

  useEffect(() => {
    let flashIntervalId: NodeJS.Timeout | null = null;
    let soundLoop: Tone.Loop | null = null;

    if (isBeaconActive && audioInitialized && synthRef.current) {
      let isLit = false;
      flashIntervalId = setInterval(() => {
        if (flashRef.current) {
          flashRef.current.style.backgroundColor = isLit ? "white" : "black";
        }
        isLit = !isLit;
      }, 300); // Faster flash: 300ms interval

      if (!isMuted) {
        // SOS morse code: ...---... (S O S)
        // S: dot dot dot (short short short)
        // O: dash dash dash (long long long)
        // Approx timing: dot = 1 unit, dash = 3 units, space between symbols = 1 unit, space between letters = 3 units, space between words = 7 units
        const unitTime = 0.15; // seconds for one dot
        const sosSequence = [
          // S
          { time: 0, duration: unitTime, note: "C5" },
          { time: unitTime * 2, duration: unitTime, note: "C5" },
          { time: unitTime * 4, duration: unitTime, note: "C5" },
          // O (3 units space after S)
          { time: unitTime * 7, duration: unitTime * 3, note: "C5" },
          { time: unitTime * 11, duration: unitTime * 3, note: "C5" },
          { time: unitTime * 15, duration: unitTime * 3, note: "C5" },
          // S (3 units space after O)
          { time: unitTime * 21, duration: unitTime, note: "C5" },
          { time: unitTime * 23, duration: unitTime, note: "C5" },
          { time: unitTime * 25, duration: unitTime, note: "C5" },
        ];
        
        const part = new Tone.Part((time, value) => {
          synthRef.current?.triggerAttackRelease(value.note, value.duration, time);
        }, sosSequence);
        part.loop = true;
        part.loopEnd = unitTime * 32; // Loop after S O S and a word space
        part.start(0);

        Tone.Transport.start();
        soundLoop = part; // To manage the part as a loop
      }

      return () => {
        if (flashIntervalId) clearInterval(flashIntervalId);
        if (flashRef.current) {
          flashRef.current.style.backgroundColor = "transparent";
        }
        if (soundLoop) {
            soundLoop.stop(0);
            soundLoop.dispose();
        }
        Tone.Transport.stop();
        Tone.Transport.cancel(); 
      };
    }
    
    return () => {
      if (synthRef.current) {
        // synthRef.current.dispose(); // Avoid disposing here, manage in main cleanup
      }
    }

  }, [isBeaconActive, isMuted, audioInitialized]);
  
  // Cleanup synth on component unmount
  useEffect(() => {
    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      Tone.Transport.stop();
      Tone.Transport.cancel();
    }
  }, []);


  const toggleBeacon = async () => {
    if (!isBeaconActive && !audioInitialized) { // Only init if activating and not yet initialized
      await initializeAudio();
    }
    setIsBeaconActive(!isBeaconActive);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
     if (isBeaconActive && audioInitialized && synthRef.current) {
        if (!isMuted) { // If unmuting, and beacon is active, restart transport
            Tone.Transport.start();
        } else { // If muting, stop transport
            Tone.Transport.stop();
        }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <RadioTower className={`h-8 w-8 ${isBeaconActive ? 'text-destructive animate-pulse' : 'text-primary'}`} />
            <div>
                <CardTitle className="text-2xl">SOS Beacon</CardTitle>
                <CardDescription>
                Activate to emit a flashing light and audible SOS signal.
                </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button
            onClick={toggleBeacon}
            variant={isBeaconActive ? "destructive" : "default"}
            size="lg"
            className="w-full text-lg py-8 bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
            aria-pressed={isBeaconActive}
          >
            {isBeaconActive ? <PowerOff className="h-6 w-6"/> : <Power className="h-6 w-6"/>}
            {isBeaconActive ? "Deactivate Beacon" : "Activate Beacon"}
          </Button>
          {isBeaconActive && (
            <Button
              onClick={toggleMute}
              variant="outline"
              size="sm"
              className="w-full"
              aria-pressed={isMuted}
            >
              {isMuted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
              {isMuted ? "Unmute Sound" : "Mute Sound"}
            </Button>
          )}
        </CardContent>
      </Card>

      {isBeaconActive && (
        <div
          ref={flashRef}
          aria-hidden="true"
          className="fixed inset-0 z-[100] pointer-events-none transition-colors duration-100"
          style={{ backgroundColor: "transparent" }}
        />
      )}
      <Card className="w-full max-w-md border-accent bg-accent/10">
        <CardHeader>
            <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent"/>
                <CardTitle className="text-md text-accent">Important Considerations</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="text-sm text-accent-foreground/90 space-y-1">
            <p>Use the SOS beacon only in genuine emergencies.</p>
            <p>This feature consumes significant battery. Monitor your device's power.</p>
            <p>The effectiveness of the beacon depends on environmental conditions and proximity of potential rescuers.</p>
        </CardContent>
      </Card>
    </div>
  );
}
