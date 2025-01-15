import { Beat } from '@src/model/Beat';
import { TextAlign } from '@src/platform/ICanvas';
import { BarRendererBase } from '@src/rendering/BarRendererBase';
import { EffectBarGlyphSizing } from '@src/rendering/EffectBarGlyphSizing';
import { EffectGlyph } from '@src/rendering/glyphs/EffectGlyph';
import { TextGlyph } from '@src/rendering/glyphs/TextGlyph';
import { EffectBarRendererInfo } from '@src/rendering/EffectBarRendererInfo';
import { Settings } from '@src/Settings';
import { NotationElement } from '@src/NotationSettings';
import { ChordDiagramGlyph } from '../glyphs/ChordDiagramGlyph';

export class ChordsEffectInfo extends EffectBarRendererInfo {
    public get notationElement(): NotationElement {
        return NotationElement.ChordDiagrams;
    }

    public get hideOnMultiTrack(): boolean {
        return false;
    }

    public get canShareBand(): boolean {
        return true;
    }

    public get sizingMode(): EffectBarGlyphSizing {
        return EffectBarGlyphSizing.SingleOnBeat;
    }

    public shouldCreateGlyph(settings: Settings, beat: Beat): boolean {
        return beat.hasChord;
    }

    public createNewGlyph(renderer: BarRendererBase, beat: Beat): EffectGlyph {
        //return new TextGlyph(0, 0, beat.chord!.name, renderer.resources.effectFont, TextAlign.Center);
        let chord = beat.chord!;
        
            let chordDiagram: ChordDiagramGlyph = new ChordDiagramGlyph(0, 0, chord);
            chordDiagram.renderer = renderer;
            console.log("above :")
            console.log(renderer.resources)
            chordDiagram.doLayout();
        
        return chordDiagram
    }

    public canExpand(from: Beat, to: Beat): boolean {
        return false;
    }
}
