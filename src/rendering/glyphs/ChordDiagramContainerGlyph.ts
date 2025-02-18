import { Chord } from '@src/model/Chord';
import { ChordDiagramGlyph } from '@src/rendering/glyphs/ChordDiagramGlyph';
import { RowContainerGlyph } from '@src/rendering/glyphs/RowContainerGlyph';

export class ChordDiagramContainerGlyph extends RowContainerGlyph {
    public constructor(x: number, y: number) {
        super(x, y);
    }

    public addChord(chord: Chord): void {
        if (chord.strings.length > 0) {
            let chordDiagram: ChordDiagramGlyph = new ChordDiagramGlyph(0, 0, chord);
            chordDiagram.renderer = this.renderer;
            console.log("top :")
            console.log(this.renderer.resources)
            chordDiagram.doLayout();
            this.glyphs!.push(chordDiagram);
        }
    }
}
